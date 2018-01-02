import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {WeatherService} from '../../service/weather.service'
import { WeatherComponent } from './weather.component';
import {HttpModule} from '@angular/http';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
