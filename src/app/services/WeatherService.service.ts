import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(
      private http: HttpClient
    ) { }

    apiUrl = "https://weather2004.pythonanywhere.com/weather-api"
    
    getCurrentWeather(city:any) {
        let url = `${this.apiUrl}/current/${city}`;
        return this.http.get(url);
    }

    getWeatherForecast(city: any) {
      let url = `${this.apiUrl}/forecast/${city}`;
        return this.http.get(url);
    }
}