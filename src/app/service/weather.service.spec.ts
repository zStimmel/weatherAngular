import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WeatherService', () => {
  let injector: TestBed;
  let service: WeatherService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
    injector = getTestBed();
    service = injector.get(WeatherService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not immediately connect to the server', () => {
    httpMock.expectNone({});
  });

  describe('getWeatherByCityName', () => {
    it('should return an Observable', () => {
      const mockweather = {
        name: "Wilmington",
        main: {
          temp: 265.38
        },
        sys: {
          country: "US"
        }
      };

      service.getWeather("Wilmington").subscribe(weather => {
        expect(weather.getName()).toEqual(mockweather.name);
        expect(weather.getTemp()).toEqual(18); //needs to be 18F not 265KELVIN/getTemp() converts
        expect(weather.getCountry()).toEqual(mockweather.sys.country);
      });

      const req = httpMock.expectOne('http://localhost:8080/weather/Wilmington');
      expect(req.request.method).toBe("GET");
      req.flush(mockweather);
    })
  })
})
