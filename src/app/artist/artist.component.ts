import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import {ArtistService} from '../artist.service';
import { AlbumQuery } from './albumQuery.model'


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  albums: AlbumQuery[];

  constructor(private discogsQ: ArtistService) { }


  onSubmit(form: NgForm) {
    const term = form.value.queryArtist;
    this.discogsQ.queryArtist(term);
    form.resetForm();
  }

  onGetAlbums(artist) {
    this.discogsQ.queryAlbums(artist)
      .subscribe(
        (albums: AlbumQuery[]) => {
          this.albums = albums;
        }
      );
  }

  onSaveAlbum(master) {
    this.discogsQ.addAlbum(master)
      .subscribe(
        data => console.log(data),
        error => console.error(error))
        };




}
