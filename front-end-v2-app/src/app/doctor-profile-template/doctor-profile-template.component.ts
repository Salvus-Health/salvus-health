import {Component, OnInit} from '@angular/core';
import {DoctorProfileInfoService} from './doctor-profile-info.service';
import {Doctor} from './Doctor';
import {ActivatedRoute} from '@angular/router';
import {NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'abe-doctor-profile-template',
  templateUrl: './doctor-profile-template.component.html',
  styleUrls: ['./doctor-profile-template.component.scss']
})
export class DoctorProfileTemplateComponent implements OnInit {

  //Todo: assign id using the router
  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  id: string;
  dr: Doctor = new Doctor('../../assets/doc_pic.jpeg',
    'Lionel Messi',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex eros, posuere ' +
    'ut erat id, consequat porta est.' +
    ' Sed vel semper felis. ' +
    'Etiam fermentum varius nunc. Aenean sit amet vehicula mauris, vel vestibulum massa. Curabitur vulputate erat blandit ' +
    'est rhoncus sodales ac quis tellus. ' +
    'Suspendisse dictum ante sed nulla moles' +
    'tie hendrerit. Aliquam auctor mauris a augue interdum, a lobortis enim faucibus.' +
    ' Duis placerat posuere est ac lobortis. Curabitur et pharetra nunc. ',
    'Barcelona', 'I098A'
    , null, 'L messi Practice');

  constructor(private drService: DoctorProfileInfoService,
              actRoute: ActivatedRoute,
              calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    actRoute.params.subscribe(params => {
      this.id = params['id'];
      // debugger;
      console.log(this.id + ' this is my id');
    });
    // this.dr = this.drService.getDocInfo(this.id)
    // if (temp) {
    //   this.dr = temp;
    // }
    // else
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  ngOnInit() {
  }

}
