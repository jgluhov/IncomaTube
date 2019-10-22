import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YouTubeComponent } from './modules/you-tube/components/you-tube/you-tube.component';

@NgModule({
  declarations: [
    AppComponent,
    YouTubeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
