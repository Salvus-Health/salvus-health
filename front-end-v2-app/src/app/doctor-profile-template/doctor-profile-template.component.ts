import {Component, OnInit} from '@angular/core';
import {DoctorProfileInfoService} from './doctor-profile-info.service';
import {Doctor} from '../models/Doctor';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {Authentication} from '../_services/Authentication';
import {ClientRoutes} from '../routes/ClientRoutes';

@Component({
  selector: 'abe-doctor-profile-template',
  templateUrl: './doctor-profile-template.component.html',
  styleUrls: ['./doctor-profile-template.component.scss']
})
export class DoctorProfileTemplateComponent extends Authentication implements OnInit {

  hoveredDate: NgbDate;
  selected = 'option1';
  fromDate: NgbDate;
  toDate: NgbDate;

  id: string;
  dr: Doctor = new Doctor();

  constructor(private drService: DoctorProfileInfoService,
              actRoute: ActivatedRoute,
              calendar: NgbCalendar,
              router: Router) {
    super(router);

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    actRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id + ' this is my id');
      this.assignDoctorInfo();
    });
  }

  assignDoctorInfo() {
    try {
      const temp = this.drService.getDocInfo(this.id);
      if (temp) {
        this.dr = temp;
      } else {
        this.router.navigateByUrl(ClientRoutes.options);
      }
    } catch (e) {
      this.router.navigateByUrl(ClientRoutes.options);
    }
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
