import {Component, OnInit} from '@angular/core';
import {Doctor} from '../doctor-profile-template/Doctor';
import {DoctorProfileInfoService} from '../doctor-profile-template/doctor-profile-info.service';

@Component({
  selector: 'abe-options-section',
  templateUrl: './options-section.component.html',
  styleUrls: ['./options-section.component.scss']
})
export class OptionsSectionComponent implements OnInit {
  drs: Doctor [] = [
    new Doctor('../../assets/doc_pic.jpeg', 'Lionel Messi', 'Best doctor in the world', 'Barcelona', 'I098A', null, 'My practice'),
    new Doctor('../../assets/doc_pic_2.jpg', 'Cristiano Ronaldo',
      'Second best doctor in the world', 'Juventus', 'D098B', null, 'My practice'),
    new Doctor('../../assets/doc_pic.jpeg', 'Doctor House',
      'This guy guesses whenever he needs to make a diagnostic', 'New YOrk', '00000', null, 'My practice'),
    new Doctor('../../assets/doc_pic.jpeg',
      'Whut whut', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'New YOrk', '00000', null, 'My practice'),
    new Doctor('../../assets/doc_pic.jpeg',
      'Lionel Messi', 'Best doctor in the world', 'Barcelona', 'I098A', null, 'My practice'),
    new Doctor('../../assets/doc_pic.jpeg',
      'Cristiano Ronaldo', 'Second best doctor in the world', 'Juventus', 'D098B', null, 'My practice'),
    new Doctor('../../assets/doc_pic.jpeg',
      'Doctor House', 'This guy guesses whenever he needs to make a diagnostic', 'New YOrk', '00000', null, 'My practice'),
    new Doctor('../../assets/doc_pic.jpeg',
      'Whut whut', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'New YOrk', '00000', null, 'My practice')
  ];

  constructor(private drService: DoctorProfileInfoService) {
    //TODO: change this
    this.findClosest(8);
  }

  ngOnInit() {
  }


  public findClosest(zipcode: number) {
    //Todo: Api call, zipcode sorting
    //TODO: zipcode subscription
    this.drService.storeAllDoctors(this.drs);
  }


}
