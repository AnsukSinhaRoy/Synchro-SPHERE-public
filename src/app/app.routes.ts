import { Routes } from '@angular/router';
import { ConfigurePageComponent } from './configure-page/configure-page.component';
import { LeadManagementConfigComponent } from './configure-page components/lead-management-config/lead-management-config.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddRolesComponent } from './shared/add-roles/add-roles.component';

export const routes: Routes = [
    {path:"configure",component:LeadManagementConfigComponent},
    {path:"",component:ConfigurePageComponent},
    {path:"home", component:LandingPageComponent},
    {path:"try", component:AddRolesComponent}
];
