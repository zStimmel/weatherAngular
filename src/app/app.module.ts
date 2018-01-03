import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WeatherComponent} from './component/weather/weather.component';
import {WeatherService} from './service/weather.service'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
