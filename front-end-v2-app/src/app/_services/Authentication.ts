/*--------------------------------------------------------------------------------------
|	Authentication Module: Created by Jordi Hernandez on 10/29/2018.
|---------------------------------------------------------------------------------------
|   Description:
|
---------------------------------------------------------------------------------------*/
import {OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';
import {ClientRoutes} from '../routes/ClientRoutes';

export abstract class Authentication {

  constructor(protected router: Router) {
    // debugger;
    if (!AuthenticationService.hasToken()) {
      this.router.navigateByUrl(ClientRoutes.initialPage);
    }
  }
}
