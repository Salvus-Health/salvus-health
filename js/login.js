$(document).ready(function() {
    $('#userEmail').focus();
    let v = getParameterByName('v');
    // redirectUser();
    console.log(v);
    let signInState;

    if (v == "signup") {
        console.log("hello");
        signInState = true;
    } else {
        console.log("world");
        signInState = false;
    }

    if (signInState) {
        $('.signup').css('display', 'inline-block');
        $('.signin').css('display', 'none');
        $('.forgotPw').css('display', 'none');
        $('.prox').html('Sign up for your 7 day free trial<b class="orange">.</b>');
        $('.createAcc').text("Already have an account?");
        $('.toggleSign').text('Login to account');
        $('.forgot.pw').hide();
        $('.successMsgs').hide();
        signInState = false;
    } else {
        $('.signin').css('display', 'inline-block');
        $('.signup').css('display', 'none');
        $('.forgotPw').css('display', 'none');
        $('.prox').html('Sign in<b class="orange">.</b>');
        $('.createAcc').text("Don't have an account?");
        $('.toggleSign').text('Create account');
        $('.forgot.pw').show();
        $('.successMsgs').hide();
        signInState = true;
    }

    $('.forgot').on('click', function() {
        $('.signin').css('display', 'none');
        $('.signup').css('display', 'none');
        $('.forgotPw').css('display', 'inline-block');
        $('.prox').html('Password reset<b class="orange">.</b>');
        $('.createAcc').text("Got your email?");
        $('.toggleSign').text('Login');
        $('.forgot.pw').hide();
        $('.errorMsgs').hide();
        signInState = false;
    });

    $('.toggleSign').on('click', function() {
        console.log(signInState);
        if (signInState) {
            $('.signup').animate({width:'toggle'},350);
            $('.signin').css('display', 'none');
            $('.forgotPw').css('display', 'none');
            $('.prox').html('Sign up for 7 day free trial<b class="orange">.</b>');
            $('.createAcc').text("Already have an account?");
            $('.toggleSign').text('Login to account');
            $('.forgot.pw').hide();
            $('.successMsgs').hide();
            signInState = false;
        } else {
            $('.signin').css('display', 'inline-block');
            $('.signup').css('display', 'none');
            $('.forgotPw').css('display', 'none');
            $('.prox').html('Sign in<b class="orange">.</b>');
            $('.createAcc').text("Don't have an account?");
            $('.toggleSign').text('Create account');
            $('.forgot.pw').show();
            $('.successMsgs').hide();
            signInState = true;
        }
    });

    $('.loginEnter').keypress(function(e) {
        let email = $('#userInEmail').val();
        let pw = $('#userInPw').val();
        var key = e.which;
        if (key == 13) // the enter key code
        {
            login(email, pw);
        }
    });
    $('.signupEnter').keypress(function(e) {
        let name = $('#userFirst').val();
        let email = $('#userEmail').val();
        let pw = $('#userPw').val();
        var key = e.which;
        if (key == 13) // the enter key code
        {
            signup(name, email, pw);
        }
    });

    $('.forgotEnter').keypress(function(e) {
        let email = $('#forgotPwEmail').val();
        var key = e.which;
        if (key == 13) // the enter key code
        {
            forgotPw(email);
        }
    });


    // redirectUser();
    $('.loginBtn').on('click', function() {
        console.log("tried sign in")
        let email = $('#userInEmail').val();
        let pw = $('#userInPw').val();

        login(email, pw);

    });
    $('.forgotPwBtn').on('click', function() {
        let email = $('#forgotPwEmail').val();

        forgotPw(email);

    });
    $('.signUpBtn').on('click', function() {
        console.log("tried sign up")
        let name = $('#userFirst').val();
        let email = $('#userEmail').val();
        let pw = $('#userPw').val();

        signup(name, email, pw);

    });

    function showError(msg) {
      $('.errorMsgs').slideDown();
      $('.successMsgs').hide();
      $('.errorMsg').text(msg);
    }

    function showSuccess(msg) {
      $('.successMsgs').slideDown();
      $('.errorMsgs').hide();
      $('.successMsg').text(msg);
    }

    function forgotPw(email) {
      if (email != "") {
                firebase.auth().sendPasswordResetEmail(email)
                    .then(function(value) {
                        ga('send', 'event', 'Forgot pw via landing login', 'created');
                        showSuccess("Email successfully sent... Check your email to reset password.");
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
              showError("Oops. You must enter an email address");
            }
    }

    function login(email, pw) {
        if (email != "" && pw != "") {
            if (pw.length > 7) {
                firebase.auth().signInWithEmailAndPassword(email, pw)
                    .then(function(value) {
                        ga('send', 'event', 'Login via landing login', 'created');
                        window.location = 'https://seizetheday.io/app/';
                        console.log(value);
                    })
                    .catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        showError(errorMessage);
                        console.log(errorMessage);
                        // ...
                    });
            }
        } else {
          showError("Oops. The email and password can not be empty...");
        }
    }

    function signup(name, email, pw) {
        if (name != "" && email != "" && pw != "") {
            if (pw.length > 7) {
                firebase.auth().createUserWithEmailAndPassword(email, pw)
                    .then(function(user) {
                        ga('send', 'event', 'Sign up via landing login', 'created');
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

    // function redirectUser() {

    //     // if (user != undefined) {
    //     //     console.log(user)
    //     //   // window.location = '../components/index/';
    //     // } else {
    //     //   // No user is signed in.
    //     // }
    //     firebase.auth().onAuthStateChanged(function(user) {
    //         if (user) {
    //             console.log('redirect')
    //             window.location = '../components/index/';
    //         }
    //     });
    // }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
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
});
