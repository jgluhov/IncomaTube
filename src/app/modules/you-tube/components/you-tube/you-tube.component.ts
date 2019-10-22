import { Component, OnInit } from '@angular/core';
import { YouTubeService } from '@you-tube/services/you-tube.service';

@Component({
  selector: 'app-you-tube',
  templateUrl: './you-tube.component.html',
  styleUrls: ['./you-tube.component.scss']
})
export class YouTubeComponent implements OnInit {

  constructor(public youTubeService: YouTubeService) {}

  ngOnInit() {
    this.youTubeService.getVideos().subscribe((videos) => {
      console.log(videos);
    });
  }

}
