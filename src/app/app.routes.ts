import { Routes } from '@angular/router';
import { LogisticsComponent } from './components/logistics/logistics.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {path:'logistic',component:LogisticsComponent}
];
