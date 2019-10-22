import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class YouTubeService {
  API_KEY = 'AIzaSyACjFcrXkTpO1ecXoXeSRps_Cp0cfKbQNY';
  BASE_URL = 'https://www.googleapis.com/youtube/v3/videos';

  constructor(
    public http: HttpClient
  ) { }

  getVideos() {
    const params = new HttpParams({
      fromObject: {
        part: 'snippet',
        chart: 'mostPopular',
        regionCode: 'RU',
        key: this.API_KEY
      }
    });

    return this.http.get(this.BASE_URL, { params });
  }
}
