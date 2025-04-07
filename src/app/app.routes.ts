import { Routes } from '@angular/router';
import { HomeComponent } from '../../src/pages/home/home.component';
import { SearchPageComponent } from '../../src/pages/search-page/search-page.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',component:HomeComponent},
  { path: 'search', component: SearchPageComponent }
];
