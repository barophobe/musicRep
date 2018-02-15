import {Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import {AlbumQuery} from './artist/albumQuery.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';


@Injectable()
export class MyMusicService {
  private albums: AlbumQuery[] = [];

  constructor(private http: Http) { }

  getAlbums() {
    return this.http.get('http://localhost:3000/albums')
      .map((response: Response) => {
        const albums = response.json().obj;
        let alteredAlbums: AlbumQuery[] = [];
        for (let album of albums) {
          alteredAlbums.push(new AlbumQuery(album.style,
            album.thumb,
            album.format,
            album.country,
            album.barcode,
            album.uri,
            album.community,
            album.label,
            album.catno,
            album.year,
            album.genre,
            album.title,
            album.resource_url,
            album.type,
            album.id
          ));
        }
        this.albums = alteredAlbums;
        return alteredAlbums;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

}

