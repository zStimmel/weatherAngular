import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {WeatherService} from '../../service/weather.service'
import { WeatherComponent } from './weather.component';
import {HttpClientModule} from '@angular/common/http';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ WeatherComponent ],
      providers:[WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
