import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent
  },
  // Additional feature routes (such as main trip planner) can be added here
];
