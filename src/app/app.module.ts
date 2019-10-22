import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YouTubeComponent } from './modules/you-tube/components/you-tube/you-tube.component';
import { YouTubeModule } from '@you-tube/you-tube.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    YouTubeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
