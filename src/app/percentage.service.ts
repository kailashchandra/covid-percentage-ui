import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PercentPayload } from './PercentPayload';

@Injectable({
  providedIn: 'root'
})
export class PercentageService {
  //private URL: string = "http://localhost:8080/api/coviddata";
  private URL: string = "https://covid-percentage.herokuapp.com/api/coviddata";

  constructor(private httpClient: HttpClient) { }

  getPercentage(): Observable<any> {
    return this.httpClient.get<any>(this.URL);
  }
}
