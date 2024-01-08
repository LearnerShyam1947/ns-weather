import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/WeatherService.service'
import { RouterExtensions } from '@nativescript/angular';

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    city:any;
    result:any = null;
    isProcessing:boolean = false;

    constructor(
        private weatherService:WeatherService,
        private router:RouterExtensions
    ) { }

    ngOnInit() { }

    getWeather() {
        this.isProcessing = true;
        this.weatherService.getCurrentWeather(this.city).subscribe(
            res => {
                this.result = res;
                this.isProcessing=false;
            }
        )
        console.log(this.result);
    }

    goToForecast() {
        this.router.navigate(['forecast', this.city])
    }
}