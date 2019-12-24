import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhatsAppToHtmlPipe } from './whats-app-to-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    What,
    WhatsAppToHtmlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
