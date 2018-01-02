import { Component, OnInit } from '@angular/core';
import { Weathermodel } from '../../model/Weathermodel'
import { WeatherService } from '../../service/weather.service'


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  private weather: Weathermodel;

  constructor(private weatherservice: WeatherService) { }

  ngOnInit() {
  }

  getWeatherByCityName(city: any) {
    if(city.value == null || city.value == ""){
      return null;
    }
    this.weatherservice.getWeather(city.value).subscribe(weather => {
      this.weather = weather;
    })
    city.value = "";
  }

}
