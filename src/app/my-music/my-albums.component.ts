import { Album } from './album.model';
import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {MyMusicService} from '../my-music.service';


@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyAlbumsComponent implements OnInit {
  @Input() album: Album;

  constructor(private myMusicService: MyMusicService) {
  }

  ngOnInit() {
  }


  onDelete() {
    this.myMusicService.deleteAlbum(this.album)
      .subscribe(
        result => console.log(result)
      );
  }
}
