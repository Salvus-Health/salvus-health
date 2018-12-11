import {Component, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import {Router} from '@angular/router';
import {ClientRoutes} from './routes/ClientRoutes';
import {AuthenticationService} from './_services/authentication.service';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end-v2-app';

  // searchBarWidth = 'col-md-5';

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private router: Router) {
    router.navigateByUrl(ClientRoutes.initialPage);
  }

  someMethod() {
    this.trigger.openMenu();
  }

  goToOptions() {
    if (!AuthenticationService.hasToken()) {
      this.router.navigateByUrl(ClientRoutes.initialPage);
    } else {
      this.router.navigate(['/']);
    }
  }

  // getSearchBarWidth() {
  //   this.searchBarWidth = 'col-md-10';
  // }

}
