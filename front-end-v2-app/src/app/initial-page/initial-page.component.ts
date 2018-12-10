import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientRoutes} from '../routes/ClientRoutes';
import {Authentication} from '../_services/Authentication';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'abe-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  constructor(private router: Router, authServ: AuthenticationService) {
    if (AuthenticationService.hasToken()) {
      this.router.navigateByUrl(ClientRoutes.options);
    }

  }

  ngOnInit() {
  }



}
