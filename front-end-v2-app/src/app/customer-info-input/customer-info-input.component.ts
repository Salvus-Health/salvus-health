import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';
import {ClientRoutes} from '../routes/ClientRoutes';

@Component({
  selector: 'abe-customer-info-input',
  templateUrl: './customer-info-input.component.html',
  styleUrls: ['./customer-info-input.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('close', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('5s')
      ]),
    ])
  ],
})

export class CustomerInfoInputComponent implements OnInit {

  employerInsuranceQuestion = ' Does your employer provides you health insurance?';
  empIHide = true;
  additionalInfo = false;

  color = 'primary';
  checked = false;
  disabled = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onIsEmpInsurance(isEmpInsurance: boolean) {
    this.empIHide = false;
    this.additionalInfo = !this.additionalInfo;
  }

  onNextClick() {

    this.router.navigateByUrl(ClientRoutes.initialPage + '/' + ClientRoutes.signUp);
  }

}
