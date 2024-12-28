import { Routes } from '@angular/router';
import { LogisticsComponent } from './components/logistics/logistics.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { ScrollpageZoomComponent } from './components/scrollpage-zoom/scrollpage-zoom.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {path:'logistic',component:LogisticsComponent},
    {path:'tabledata',component:DatatableComponent},
    {path:'scrollPage',component:ScrollpageZoomComponent}
];
