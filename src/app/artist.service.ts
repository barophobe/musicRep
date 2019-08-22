import {Http, Response, Headers} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
/*import {operators} from 'rxjs/Rx';*/
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
  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }

   queryArtist(term: string) {
     const apiURL = `${this.apiRoot}artist/${term}`;
     this.http
       .get<{ArtistQuery}>(apiURL)
       .pipe(map(responseData => {
         const artistData: ArtistQuery[] = [];
         for (const artist in responseData) {
           if (responseData.hasOwnProperty(artist)) {
             artistData.push({ ...responseData[artist] })
           }
         }
         return artistData;
       })
       )
       .subscribe(artist => { // Success
         this.results = artist;

       })
   };
  queryAlbums(artist: string) {
    const apiURL = `${this.apiRoot}albums/${artist}`;
    return this.http
      .get(apiURL)
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
  return this.http.get(apiURL + token)
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json()));
}
}
