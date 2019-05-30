import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get("http://northwind.servicestack.net/customers.json");
  };


  getWeather(city) {
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=b0488f3ae5c9fced7ff7181e768e8557");
  }
}
