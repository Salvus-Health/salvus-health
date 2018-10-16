import {Component, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import {Router} from '@angular/router';

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

  }

  someMethod() {
    this.trigger.openMenu();
  }

  goToOptions() {
      this.router.navigateByUrl('/');
  }

  // getSearchBarWidth() {
  //   this.searchBarWidth = 'col-md-10';
  // }

}
