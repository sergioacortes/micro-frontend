import { Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';

export const routes: Routes = [{
    path: '',
    component: DefaultComponent
}, {
    path: 'info',
    loadChildren: () => import('./info/info.module').then((m) => m.InfoModule)
}];