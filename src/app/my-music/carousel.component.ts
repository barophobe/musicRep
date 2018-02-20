import {Component, EventEmitter, Input, Output,  OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Album } from './album.model';
import {MyMusicService} from '../my-music.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  @Output() albumSelected = new EventEmitter<Album>();
  @Input() albums: Album[];
  @Output() artistId = new EventEmitter<number>();

  constructor(private myMusicService: MyMusicService, config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
  }
  ngOnInit() {
  }

  onAlbumSelect(album: Album) {
    this.albumSelected.emit(album);
    this.artistId.emit(album.artists['0'].id);
  }
}


