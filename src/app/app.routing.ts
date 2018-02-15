import {RouterModule, Routes} from '@angular/router';
import {MyMusicComponent} from './my-music/my-music.component';
import {ArtistComponent} from './artist/artist.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/Api', pathMatch: 'full' },
  { path: 'My Music', component: MyMusicComponent },
  { path: 'Api', component: ArtistComponent }
  ];

export const routing = RouterModule.forRoot(APP_ROUTES);
