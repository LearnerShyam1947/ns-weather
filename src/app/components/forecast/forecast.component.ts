import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/WeatherService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ns-forecast',
    templateUrl: './forecast.component.html'
})

export class ForecastComponent implements OnInit {
    constructor(
        private weatherService:WeatherService,
        private active:ActivatedRoute
    ) { }

    isProcessing:boolean = false;
    forecastData:any = null;
    city:any;

    ngOnInit() { 
        this.city = this.active.snapshot.params.city;
        console.log(this.city);
        this.isProcessing = true;
        this.weatherService.getWeatherForecast(this.city).subscribe(
            res => {
                this.forecastData = res;
                this.isProcessing = false;
            }
        )
    }
}