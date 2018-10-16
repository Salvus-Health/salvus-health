import {Component, Input, OnInit, ViewChild} from '@angular/core';
// import {config} from '../../assets/config.js';
import {} from '@types/googlemaps';
import Point = google.maps.Point;
import {PointAddress} from './PointAddress';

@Component({
  selector: 'abe-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  @Input() address: PointAddress;
  @Input() markerTitle: string;
  map: google.maps.Map;

  // key = 'https://maps.googleapis.com/maps/api/js?key=' + config.Google_Maps_Key + '&callback=initMap';


  constructor() {
  }

  ngOnInit() {
    let position;
    if (this.address && this.address.lat && this.address.long) {
      position = new google.maps.LatLng(this.address.lat, this.address.long);
    } else {
      position = new google.maps.LatLng(29.650091, -82.348550);
    }


    const mapProp = {
      center: position,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    const marker = new google.maps.Marker({
      map: this.map,
      position: position,
      title: this.markerTitle || 'hello world',
    });

    marker.setMap(this.map);
  }
}
