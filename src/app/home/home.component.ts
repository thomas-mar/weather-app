import { Component, OnInit } from '@angular/core';
import { WeatherServiceService} from '../weather-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _weatherService: WeatherServiceService) { }
  public weatherData;

  ngOnInit() {
  }

  getWeather(city){
    this._weatherService.getWeather(city).subscribe(
      data => { 
        this.weatherData = JSON.stringify(data); 
      } 
    );
  }

}
