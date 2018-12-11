import {Component, OnInit} from '@angular/core';
import {Doctor} from '../models/Doctor';
import {DoctorProfileInfoService} from '../doctor-profile-template/doctor-profile-info.service';
import {Authentication} from '../_services/Authentication';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ServerRoutes} from '../routes/ServerRoutes';
import {first, map} from 'rxjs/operators';
import {ResponseService} from '../_services/response.service';
import {LocalStorage} from '../routes/LocalStorage';

@Component({
  selector: 'abe-options-section',
  templateUrl: './options-section.component.html',
  styleUrls: ['./options-section.component.scss']
})
export class OptionsSectionComponent extends Authentication implements OnInit {
  drs: Doctor [];
  testImg = '../../assets/doc_pic.jpeg';
  // drs: Doctor [] = [
  //   new Doctor('../../assets/doc_pic.jpeg', 'Lionel Messi', 'Best doctor in the world', 'I098A', null, 'My practice', 50),
  //   new Doctor('../../assets/doc_pic_2.jpg', 'Cristiano Ronaldo',
  //     'Second best doctor in the world', 'D098B', null, 'My practice', 50),
  //   new Doctor('../../assets/doc_pic.jpeg', 'Doctor House',
  //     'This guy guesses whenever he needs to make a diagnostic', '00000', null, 'My practice', 50),
  //   new Doctor('../../assets/doc_pic.jpeg',
  //     'Whut whut', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', '00000', null, 'My practice', 50),
  //   new Doctor('../../assets/doc_pic.jpeg',
  //     'Lionel Messi', 'Best doctor in the world', 'I098A', null, 'My practice', 50),
  //   new Doctor('../../assets/doc_pic.jpeg',
  //     'Cristiano Ronaldo', 'Second best doctor in the world', 'D098B', null, 'My practice', 50),
  //   new Doctor('../../assets/doc_pic.jpeg',
  //     'Doctor House', 'This guy guesses whenever he needs to make a diagnostic', '00000', null, 'My practice', 50),
  //   new Doctor('../../assets/doc_pic.jpeg',
  //     'Whut whut', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', '00000', null, 'My practice', 50)
  // ];

  constructor(private drService: DoctorProfileInfoService,
              authS: AuthenticationService,
              router: Router,
              private http: HttpClient,
              private respS: ResponseService) {
    super(router);
    // debugger;
    //TODO: change this
    this.findClosest(8);
  }

  ngOnInit() {
  }


  public findClosest(zipcode: number) {
    //Todo: Api call, zipcode sorting
    //TODO: zipcode subscription
    this.getDoctors().pipe(first())
      .subscribe((doctors: Doctor []) => {
          console.log('doctors retreived ' + doctors.length);
          this.drService.storeAllDoctors(doctors);
          this.drs = doctors;
        },
        error => {
          const execute = this.respS.errors.get(error.status);
          execute(this.router);
        });
  }

  private getDoctors() {
    let tkn = localStorage.getItem(LocalStorage.currentUser);
    tkn = JSON.parse(tkn);
    const token: HttpParams = new HttpParams().set('token', tkn);
    return this.http.get<Doctor []>(ServerRoutes.getDoctors,
      {params: token}
    ).pipe(map(doctors => {
        console.log('it got here');
        return doctors;
      }));
  }

}
