import {Injectable} from '@angular/core';
import {Doctor} from '../models/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorProfileInfoService {

  public drsInfo: Doctor [];

  constructor() {
  }

  public getDocInfo(id: string): Doctor {
    const doc: Doctor = this.drsInfo.find((d: Doctor) => d._id === id);
    return doc;
  }

  public storeAllDoctors(drs: Doctor []) {
    this.drsInfo = drs;
  }

}
