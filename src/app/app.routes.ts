import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { AboutComponent } from './pages/about/about.component';
import { ListComponent } from './pages/list/list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { isAdminGuard } from './shared/is-admin-guard';
// import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full' אם רוצים שיגיע לניתוב המדויק כותבים
    pathMatch: 'full',

    // home עובר לניתוב של
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'my homepage', // כותרת של הטאב בדפדפן
  },
  {
    path: 'admin',
    component: AdminComponent,
    title: 'admin homepage',
    canActivate: [isAdminGuard],
  },
  {
    path: 'about',
    // component: AboutComponent,
    loadComponent: () => import('./pages/about/about.component').then((p) => p.AboutComponent),
    title: 'about',
  },
  {
    path: 'list',
    component: ListComponent,
    title: 'list',
    // כך נשים עמוד בתוך עמוד
    // למשל עמוד פרטי מוצר בתוך קומפוננטת רשימת מוצרים
    // נשים נקודותיים ואז את שם הפרמטר - פרמטר חובה שמזהה את הישות
    // children: [
    //   { path: ':id', component: DetailsComponent },
    //   // { path: 'details', component: DetailsComponent }
    // ],
    loadChildren: () => import('./list/list-module').then(m=>m.ListModule),
  },

  // כל שאר הניתובים - **
  { path: '**', component: NotFoundComponent },
];
