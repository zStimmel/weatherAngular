import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {WeatherComponent} from './component/weather/weather.component';
import {WeatherService} from './service/weather.service'
import {HttpModule} from '@angular/http';




describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      declarations: [
        AppComponent,
        WeatherComponent
      ],
      providers:[WeatherService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Weather'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Weather');
  }));
});
