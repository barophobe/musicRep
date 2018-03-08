import {Http, Response, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { ArtistQuery } from './artist/artistQuery.model';
import { AlbumQuery } from './artist/albumQuery.model';

@Injectable()
export class ArtistService {

  apiRoot = 'http://localhost:3000/';
  results: ArtistQuery[];
  loading: boolean;
  albums: AlbumQuery[]= [];
  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

   queryArtist(term: string) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}artist/${term}`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          response => { // Success
            this.results = response.json().map( item => {
              return new ArtistQuery(
                item.thumb,
                item.title,
                item.uri,
                item.resource_url,
                item.type,
                item.id
              );
            });
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

  queryAlbums(artist: string) {
    const apiURL = `${this.apiRoot}albums/${artist}`;
    return this.http.get(apiURL)
      .map((response: Response) => {
        const albums = response.json();
        let transformedAlbums: AlbumQuery[] = [];
        for (let album of albums) {
          transformedAlbums.push(new AlbumQuery(album.style,
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
        this.albums = transformedAlbums;
        return transformedAlbums;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }


addAlbum(master: number) {
  const body = JSON.stringify(master);
  const apiURL = `${this.apiRoot}albums/detail/${body}`
  const headers = new Headers({'Content-Type': 'application/json'});
  const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
  return this.http.get(apiURL + token, {headers: headers })
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json()));
}
}
