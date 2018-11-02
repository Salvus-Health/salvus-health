/*--------------------------------------------------------------------------------------
|	Doctor Module: Created by Jordi Hernandez on 10/9/2018.
|---------------------------------------------------------------------------------------
|   Description:
|
---------------------------------------------------------------------------------------*/


export class Doctor {

  description: string;

  doctorWord: string;

  services: number[];

  address: number [];

  scheduledVisits: Date [];

  headPhysician: string;

  price: number;

  clinicName: string;

  phoneNumber: number;

  patientCap: number;

  patientCount: number;

  hours: string [];

  registrationFee: number;

  visitFee: number;

  numberSalvusPatients: number;

  functional: boolean;

  tieredPay: boolean;

  _id: string;

  imgUrl: string;

  constructor() {
  }

  // getRates(): number {
  //   return this.rates;
  // }
}
