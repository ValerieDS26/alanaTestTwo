import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { codeReference } from '../../class/codeReference'


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()


export class ServiceProvider {


  constructor(public http: Http) {
    
  }

  public sendCode(data): Observable<any>{
    let _params = {code: data};
    return this.http.post('https://apidev.alanajobs.com/candidate/check-code', _params)
             .pipe(map((response) => response.json()));

  }
}
