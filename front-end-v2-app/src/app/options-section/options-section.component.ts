import {Component, OnInit} from '@angular/core';
import {Doctor} from '../doctor-profile-template/Doctor';

@Component({
  selector: 'abe-options-section',
  templateUrl: './options-section.component.html',
  styleUrls: ['./options-section.component.scss']
})
export class OptionsSectionComponent implements OnInit {
  drs: Doctor [] = [
    new Doctor('myImg', 'Lionel Messi', 'Best doctor in the world', 'Barcelona', 'I098A'),
    new Doctor('myImg', 'Cristiano Ronaldo', 'Second best doctor in the world', 'Juventus', 'D098B'),
    new Doctor('myImg', 'Doctor House', 'This guy guesses whenever he needs to make a diagnostic', 'New YOrk', '00000'),
    new Doctor('myImg', 'Whut whut', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'New YOrk', '00000')
  ];

  constructor() {
  }

  ngOnInit() {
  }


  public findClosest(zipcode: number) {

  }


}
