import {Component, OnInit} from '@angular/core';
import {DoctorProfileInfoService} from './doctor-profile-info.service';
import {Doctor} from './Doctor';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'abe-doctor-profile-template',
  templateUrl: './doctor-profile-template.component.html',
  styleUrls: ['./doctor-profile-template.component.scss']
})
export class DoctorProfileTemplateComponent implements OnInit {

  //Todo: assign id using the router
  id: string;
  dr: Doctor;

  constructor(private drService: DoctorProfileInfoService, actRoute: ActivatedRoute) {
    actRoute.params.subscribe(params => {
      this.id = params['id'];
      // debugger;
      console.log(this.id + ' this is my id');
    });
    this.dr = this.drService.getDocInfo(this.id);
  }

  ngOnInit() {
  }

}
