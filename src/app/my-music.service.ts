import {Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import {Album} from './my-music/album.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';


@Injectable()
export class MyMusicService {
  private albums: Album[] = [];

  constructor(private http: Http) { }

  getAlbums() {
    return this.http.get('http://localhost:3000/albums')
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

}

