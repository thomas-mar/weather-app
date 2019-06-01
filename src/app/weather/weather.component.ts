import { Component, OnInit } from '@angular/core';
import { WeatherServiceService} from '../weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private _weatherService: WeatherServiceService) { }
  public weatherData;
  public weatherDataJSON;
  public img;
  public imgUrl;

  ngOnInit() {
    
  }

  
  getWeather(city, getCityImage){
    let hyphenCity = city.replace(/\s/gi, "-").toLowerCase(); 
    this._weatherService.getWeather(city).subscribe(
      data => { 
        this.weatherData = data; 
        this.weatherDataJSON = JSON.stringify(data); 
        this.getCityImage(hyphenCity)
      } 
    ) 
  }


  getCityImage(city){
    this._weatherService.getCityImage(city).subscribe(
      data => {
        this.img = data;
        this.imgUrl = this.img.photos[0].image.mobile;
      },
      error => {
        this.imgUrl = "http://pluspng.com/img-png/png-sky-background-blue-sky-jpg-1800.jpg";
      }
    ) 
  }
}
