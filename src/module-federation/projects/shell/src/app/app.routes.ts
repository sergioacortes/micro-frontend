import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
}, {
    path: 'companies',
    loadChildren: () => import('companies/info').then((m) => m.InfoModule)
}];
