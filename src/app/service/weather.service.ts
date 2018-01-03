import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import {Weathermodel} from '../model/Weathermodel'
import 'rxjs/add/operator/map';



@Injectable()
export class WeatherService {

  readonly uri = "http://localhost:8080/weather/";

  constructor(private http : HttpClient) { }

  getWeather(city:string):Observable<Weathermodel>{
    return this.http.get<Weathermodel>(this.uri+city).map((response) => {
      console.log(response);
      return new Weathermodel(response);
    });
  }
}
