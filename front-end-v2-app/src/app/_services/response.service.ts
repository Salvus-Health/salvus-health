import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ClientRoutes} from '../routes/ClientRoutes';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  public errors: Map<number, any> = new Map();


  constructor(private router: Router) {
    this.errors.set(401, this.authenticate);
  }

  authenticate(router: Router) {
    router.navigateByUrl(ClientRoutes.initialPage);
  }

}
