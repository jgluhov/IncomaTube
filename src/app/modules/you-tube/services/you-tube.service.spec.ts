import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { YouTubeService } from './you-tube.service';

describe('YouTubeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      YouTubeService
    ]
  }));

  it('should be created', () => {
    const service: YouTubeService = TestBed.get(YouTubeService);
    expect(service).toBeTruthy();
  });
});
