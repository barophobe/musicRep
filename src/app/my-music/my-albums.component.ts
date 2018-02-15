import { AlbumQuery } from '../artist/albumQuery.model';
import { Component, OnInit } from '@angular/core';
import {MyMusicService} from '../my-music.service';

@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.scss']
})
export class MyAlbumsComponent implements OnInit {
   albums: AlbumQuery[];

  constructor(private myMusicService: MyMusicService) { }

  ngOnInit() {
    this.myMusicService.getAlbums()
      .subscribe(
        (albums: AlbumQuery[]) => {
          this.albums = albums;
        }
      );
  }

}
