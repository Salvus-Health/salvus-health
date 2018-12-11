import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../_services/authentication.service';
import {AlertService} from '../_services/alert.service';
import {first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {SignUpService} from '../_services/sign-up.service';

@Component({
  selector: 'abe-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private signUpService: SignUpService,
              private authenticationService: AuthenticationService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      zipcode: ['', Validators.required]
    });

    // reset login status
    // this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  //TODO: improve invalid messages( give them more context)
  //Todo: test login after registration
  onSubmit() {
    this.authenticationService.logout();
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    if (this.f.password.value !== this.f.confirmPassword.value) {
      alert('Passwords don\'t match');
      return;
    }

    this.loading = true;
    this.signUpService.signUp(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.authenticationService.login(this.f.username.value, this.f.password.value);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          // debugger;
          alert('Could not sign up');
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
