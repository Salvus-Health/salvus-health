$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 500);
    }
});

$(document).ready(function() {
    $('#firstName').focus();
    var imageScreenshot = 0;

    function changeImage() {
        if (imageScreenshot >= 2) {
            imageScreenshot = 0;
        } else {
            imageScreenshot++;
        }
        $(".roulette .circle").removeClass('active');
        $(".roulette .circle:eq(" + imageScreenshot + ")").addClass('active');
        $(".imgScreenshot").attr('src', "img/site-" + imageScreenshot + ".png");
    };
    setInterval(changeImage, 7500);

    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = 800;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 150 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 250;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // redirectUser();
        let aniHeight = $('.rw-words-1 span:last-child').outerHeight();

        $('.signupEnter').keypress(function(e) {
            let name = $('#userFirst').val();
            let email = $('#userEmail').val();
            let pw = $('#userPw').val();
            var key = e.which;
            if (key == 13) // the enter key code
            {
                let name = $('#firstName').val();
                let email = $('#clientEmail').val();
                let pw = $('#clientPw').val();
                if (name != "" && email != "" && pw != "") {
                    if (pw.length > 7) {
                      firebase.auth().createUserWithEmailAndPassword(email, pw)
                          .then(function(user) {
                              ga('send', 'event', 'Button', 'account created', 'Sign up page');
                              updateUser(name, email, true);
                              user.sendEmailVerification();
                              console.log(user);
                          })
                          .catch(function(error) {
                              // Handle Errors here.
                              var errorCode = error.code;
                              var errorMessage = error.message;
                              showError(errorMessage);
                              console.log(errorMessage);
                              // ...
                          });
                    } else {
                        showError("Oops. The password must be at least 8 characters...");
                    }
                } else {
                    showError("Oops. The email, name, and password can not be empty...");
                }
            }
        });

        $('.homeContent div.h2').height(aniHeight)

        $('.signUpBtn').click(function() {
            let name = $('#firstName').val();
            let email = $('#clientEmail').val();
            let pw = $('#clientPw').val();
            if (name != "" && email != "" && pw != "") {
                if (pw.length > 7) {
                    firebase.auth().createUserWithEmailAndPassword(email, pw)
                        .then(function(user) {
                            ga('send', 'event', 'New account via landing page', 'created');
                            updateUser(name, email, true);
                            user.sendEmailVerification();
                        })
                        .catch(function(error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            showError(errorMessage);
                            console.log(errorMessage);
                            // ...
                        });
                } else {
                    showError("Oops. The password must be at least 8 characters...");
                }
            } else {
                showError("Oops. The email, name, and password can not be empty...");
            }
        });

        // function redirectUser() {
        //     firebase.auth().onAuthStateChanged(function(user) {
        //         if (user) {
        //             window.location = '../components/index/';
        //         }
        //     });
        // }

        function showError(msg) {
            $('.errorMsgs').slideDown();
            $('.errorMsg').text(msg);
        }

        function updateUser(name, email, clicked) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user && name != "" && email != "" && name != undefined && email != undefined) {
                   name = name.charAt(0).toUpperCase() + name.slice(1);
                    user.updateProfile({
                        displayName: name
                      }).then(function() {
                        firebase.database().ref('users/' + user.uid + '/user/').update({
                              name: name,
                              email: email,
                              first_signin: new Date(),
                              email_verified: false,
                              email_reminders: true,
                              google_calendar: true,
                              pts: 0,
                              first_visit: true
                          }).then((snap) => {
                              console.log(snap)
                              window.location = 'https://seizetheday.io/app/';
                          });
                      });
                } else {

                }
            });
        }

        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
        document.body.appendChild(css);
    };
});
