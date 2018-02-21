import {RouterModule, Routes} from '@angular/router';
import {MyMusicComponent} from './my-music/my-music.component';
import {ArtistComponent} from './artist/artist.component';
import {RegisterComponent} from './auth/register.component';
import {LoginComponent} from './auth/login.component';
import {LogoutComponent} from './auth/logout.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/Api', pathMatch: 'full' },
  { path: 'My Music', component: MyMusicComponent },
  { path: 'Api', component: ArtistComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Logout', component: LogoutComponent }
  ];

export const routing = RouterModule.forRoot(APP_ROUTES);
