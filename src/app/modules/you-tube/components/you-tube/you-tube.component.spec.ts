import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouTubeComponent } from './you-tube.component';
import { YouTubeService } from '@you-tube/services/you-tube.service';
import { of } from 'rxjs';

describe('YouTubeComponent', () => {
  let component: YouTubeComponent;
  let fixture: ComponentFixture<YouTubeComponent>;
  let youTubeService;
  beforeEach(async(() => {
    youTubeService = {
      getVideos: () => of([])
    };
    TestBed.configureTestingModule({
      declarations: [ YouTubeComponent ],
      providers: [
        { provide: YouTubeService, useValue: youTubeService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouTubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
