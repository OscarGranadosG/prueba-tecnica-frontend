import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PosServicesService {

  readonly baseUrl = 'http://localhost:8000/api/v1';

  private getOpenPosUrl = this.baseUrl + '/cashier/balance';
  private saveOpenPosUrl = this.baseUrl + '/cashier/balance/open/day';

  constructor(private httpClient: HttpClient) { }

  public getOpenPosService(): Observable<Object> {
    return this.httpClient.get( this.getOpenPosUrl, {responseType: 'json'});
  }

  public saveOpenPosService(formdata: FormData): Observable<Object> {
    return this.httpClient.post( this.saveOpenPosUrl, formdata, {responseType: 'json'});
  }


}
