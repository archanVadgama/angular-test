import { Routes } from '@angular/router';
import { LibrarianComponent } from './librarian/component/librarian/librarian.component';
import { DashboardComponent } from './dashboard/component/dashboard/dashboard.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  {
    path:"",
    component: AuthComponent
  },
  {
    path:"librarian",
    component: LibrarianComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path:"**",
    component: PageNotFoundComponent
  }
];
