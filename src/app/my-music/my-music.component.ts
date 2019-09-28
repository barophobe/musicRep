import {Component, OnInit} from '@angular/core';
import { Album } from './album.model';
import {MyMusicService} from '../my-music.service';
import {Artist} from './artist.model';

@Component({
  selector: 'app-my-music',
  templateUrl: './my-music.component.html',
  styleUrls: ['./my-music.component.scss']
})
export class MyMusicComponent implements OnInit {
  albums: Album[] = [];
  album: Album;
  albumSel: Album;
  artist: Artist;

  constructor(private myMusicService: MyMusicService) {
  }

  ngOnInit() {
    this.reloadCarouseldata()

  }

  getArtistData(event) {
    this.myMusicService.getArtist(event)
      .subscribe(
        (artist: Artist) => {
          this.artist = artist;
        }
      );
  }

  reloadCarouseldata() {
    this.myMusicService.getAlbums()
      .subscribe(
        (albums: Album[]) => {
          this.albums = albums;
        }
      );
  }

  onDelete() {
    this.myMusicService.deleteAlbum(this.album)
      .subscribe(
        result => console.log(result)
      );
  }

}
