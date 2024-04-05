import { Routes } from '@angular/router';
import { ConfigurePageComponent } from './configure-page/configure-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddRolesComponent } from './shared/add-roles/add-roles.component';

export const routes: Routes = [
    {path:"configure",component:ConfigurePageComponent},
    {path:"", component:LandingPageComponent},
    {path:"try", component:AddRolesComponent}
];
