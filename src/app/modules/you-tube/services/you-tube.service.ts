import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class YouTubeService {
  API_KEY = 'AIzaSyACjFcrXkTpO1ecXoXeSRps_Cp0cfKbQNY';
  constructor(
    public http: HttpClient
  ) { }

  getVideos() {

  }
}
