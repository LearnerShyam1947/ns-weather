import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { WeatherComponent } from './components/weather/weather.component'
import { ForecastComponent } from './components/forecast/forecast.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    NativeScriptModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    ForecastComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
