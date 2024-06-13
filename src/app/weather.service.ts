import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from './models/weather-response.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost:8080/weather';

  constructor(private http: HttpClient) { }

  getWeather(location: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.apiUrl}?location=${location}`);
  }
}
