import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherResponse } from '../models/weather-response.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  location: string = '';
  weatherData?: WeatherResponse;
  error?: string;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.location).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.error = undefined;
      },
      error: (err) => {
        this.weatherData = undefined;
        this.error = 'Error retrieving weather data';
      }
    });
  }
}
