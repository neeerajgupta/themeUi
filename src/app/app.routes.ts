import { Routes } from '@angular/router';
import { LogisticsComponent } from './components/logistics/logistics.component';
import { DatatableComponent } from './components/datatable/datatable.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {path:'logistic',component:LogisticsComponent},
    {path:'tabledata',component:DatatableComponent}
];
