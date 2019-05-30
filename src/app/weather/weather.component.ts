import { Component, OnInit } from '@angular/core';
import { WeatherServiceService} from '../weather-service.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private _weatherService: WeatherServiceService) { }
  public northWind;
  public cat: string;
  ngOnInit() {
    this._weatherService.getConfig().subscribe(
      data => { 
        this.northWind = data 
      } 
    );
  }



}
