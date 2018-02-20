import { Component, OnInit, Input } from '@angular/core';
import {Artist} from './artist.model';

@Component({
  selector: 'app-my-artists',
  templateUrl: './my-artists.component.html',
  styleUrls: ['./my-artists.component.scss']
})
export class MyArtistsComponent implements OnInit {
  @Input() artist: Artist;
  constructor() { }

  ngOnInit() {
  }

}
