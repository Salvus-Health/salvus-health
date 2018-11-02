import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DoctorProfileInfoService} from '../../doctor-profile-template/doctor-profile-info.service';
import {text} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'abe-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss']
})
export class DoctorCardComponent implements OnInit {
  @Input() img: string;
  @Input() text: string;
  @Input() id: string;
  @Input() doctorName: string;
  @Input() address: string;
  @Input() rate: number;
  @Input() practiceName: string;


  constructor(private  router: Router,
              private drProf: DoctorProfileInfoService) {
  }

  goToRoute() {

    //TODO: figure out if the id needs to be passed
    // this.drProf.updateDrProfile();
    if (this.id) {
      // this.router.navigateByUrl(this.linkToRoute);
      this.router.navigate(['/doctor-profile', this.id]);
    }
  }

  ngOnInit() {
  }

}
