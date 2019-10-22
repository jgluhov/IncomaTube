import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { YouTubeComponent } from '@you-tube/components/you-tube/you-tube.component';
import { YouTubeService } from './services/you-tube.service';



@NgModule({
  declarations: [
    YouTubeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    YouTubeComponent
  ],
  providers: [
    YouTubeService
  ]
})
export class YouTubeModule { }
