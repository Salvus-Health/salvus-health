import {Component, OnInit} from '@angular/core';
import {DoctorProfileInfoService} from './doctor-profile-info.service';
import {Doctor} from './Doctor';

@Component({
  selector: 'abe-doctor-profile-template',
  templateUrl: './doctor-profile-template.component.html',
  styleUrls: ['./doctor-profile-template.component.scss']
})
export class DoctorProfileTemplateComponent implements OnInit {

  //Todo: assign id using the router
  id: string;
  dr: Doctor;

  constructor(private drService: DoctorProfileInfoService) {
  }

  ngOnInit() {
    this.dr = this.drService.getDocInfo(this.id);
  }

}
