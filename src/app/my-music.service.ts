import {Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import {Album} from './my-music/album.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import {Artist} from './my-music/artist.model';


@Injectable()
export class MyMusicService {
  private albums: Album[] = [];
  private artist: Artist;


  constructor(private http: Http) { }

  getAlbums() {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('http://localhost:3000/albums' + token)
      .map((response: Response) => {
        const albums = response.json().obj;
        const alteredAlbums: Album[] = [];
        for (const album of albums) {
          alteredAlbums.push(new Album(album._id,
            album.artistsName,
            album.myRating,
            album.albumId,
            album.main_release_url,
            album.num_for_sale,
            album.title,
            album.main_release,
            album.uri,
            album.versions_url,
            album.lowest_price,
            album.year,
            album.resource_url,
            album.data_quality,
            album.tracklist,
            album.images,
            album.artists,
            album.videos,
            album.genres,
            album.styles,
            album._v
          ));
        }
        this.albums = alteredAlbums;
        return alteredAlbums;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }
  getArtist(artistId) {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('http://localhost:3000/artist/repo/' + artistId + token )
      .map((response: Response) => {
        const artist = response.json().obj;
        this.artist = artist;
        return artist;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteAlbum(album: Album) {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    this.albums.splice(this.albums.indexOf(album), 1);
    return this.http.delete('http://localhost:3000/albums/repo/' + album._id + token )
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}

