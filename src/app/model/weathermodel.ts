export class Weathermodel {
  name: string;
  main: TempModel;
  sys: CountryModel;

  constructor(json: any) {
    this.name = json.name;
    this.main = new TempModel(json.main);
    this.sys = new CountryModel(json.sys)
  }

  getName() {
    return this.name;
  }
  getTemp() {
    return this.main.getTemp();
  }
  getCountry(){
    return this.sys.getCountry();
  }

}

class TempModel {

  temp: number;

  constructor(json:any) {
    this.temp = json.temp;
  }
  getTemp() {
    let converted:number = Math.round(((this.temp)*(9/5))-459.67);
    return converted;
  }
}

class CountryModel{
  country:string;
  constructor(json:any){
    this.country = json.country;
  }
  getCountry(){
    return this.country;
  }
}
