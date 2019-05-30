import { Component } from '@angular/core';
//import { WeatherServiceService } from './weather-service.service'; 
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //constructor(private _weatherService: WeatherServiceService){}

}
