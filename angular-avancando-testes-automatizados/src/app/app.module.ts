import { PhotoBoardModule } from './shared/components/photo-board/photo-board.module';
import { PhotoFrameModule } from './shared/components/photo-frame/photo-frame.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PhotoFrameModule,
    PhotoBoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
