import { Component, OnInit } from '@angular/core';
import { Album } from './album.model';
import {MyMusicService} from '../my-music.service';

@Component({
  selector: 'app-my-music',
  templateUrl: './my-music.component.html',
  styleUrls: ['./my-music.component.scss']
})
export class MyMusicComponent implements OnInit {
  albums: Album[];
  constructor(private myMusicService: MyMusicService) { }

  ngOnInit() {
    this.myMusicService.getAlbums()
      .subscribe(
        (albums: Album[]) => {
          this.albums = albums;
        }
      );
  }

}
