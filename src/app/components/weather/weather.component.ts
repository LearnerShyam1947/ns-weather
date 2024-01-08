import { Component, Input, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
    selector: 'ns-weather',
    templateUrl: './weather.component.html'
})

export class WeatherComponent implements OnInit {
    constructor(
        private router:RouterExtensions
    ) { }

    ngOnInit() { }

    @Input()
    data:any;

}