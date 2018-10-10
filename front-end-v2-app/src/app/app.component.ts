import {Component, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end-v2-app';

  // searchBarWidth = 'col-md-5';

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  // getSearchBarWidth() {
  //   this.searchBarWidth = 'col-md-10';
  // }

}
