import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArtistComponent } from './artist/artist.component';
import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';
import {ArtistService} from './artist.service';
import { MyMusicComponent } from './my-music/my-music.component';
import { routing } from './app.routing';
import { MyAlbumsComponent } from './my-music/my-albums.component';
import { MyArtistsComponent } from './my-music/my-artists.component';
import { MyMusicService } from './my-music.service';
import { CarouselComponent } from './my-music/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtistComponent,
    MyMusicComponent,
    MyAlbumsComponent,
    MyArtistsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ArtistService, MyMusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
