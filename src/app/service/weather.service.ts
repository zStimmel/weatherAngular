import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Weathermodel} from '../model/Weathermodel'
import 'rxjs/add/operator/map';



@Injectable()
export class WeatherService {

  private uri = "http://localhost:8080/weather/";

  constructor(private http : Http) { }

  getWeather(city:string):Observable<any>{
    return this.http.get(this.uri+city).map((response:Response) => {
      console.log(response);
      return new Weathermodel(response.json());
    });
  }
}
