import { Routes } from '@angular/router';
import { ConfigurePageComponent } from './configure-page/configure-page.component';

export const routes: Routes = [
    {path:"configure",component:ConfigurePageComponent},
    {path:"",component:ConfigurePageComponent}
];
