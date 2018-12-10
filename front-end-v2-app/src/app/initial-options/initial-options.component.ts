import {Component, OnInit} from '@angular/core';
import {ClientRoutes} from '../routes/ClientRoutes';
import {Router} from '@angular/router';

@Component({
  selector: 'abe-initial-options',
  templateUrl: './initial-options.component.html',
  styleUrls: ['./initial-options.component.scss']
})
export class InitialOptionsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  onLoginClick() {
    this.router.navigateByUrl(ClientRoutes.initialPage + '/' + ClientRoutes.login);
  }

  onRegisterClick() {
    this.router.navigateByUrl(ClientRoutes.initialPage + '/' +  ClientRoutes.customerInfoInput);
  }
}
