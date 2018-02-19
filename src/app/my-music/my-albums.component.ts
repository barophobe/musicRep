import { Album } from './album.model';
import { Component, OnInit, Input } from '@angular/core';
import {MyMusicService} from '../my-music.service';

@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.scss']
})
export class MyAlbumsComponent implements OnInit {
  @Input() albums: Album[];

  constructor(private myMusicService: MyMusicService) {
  }

  ngOnInit() {
  }
}
