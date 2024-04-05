import { Routes } from '@angular/router';
import { ConfigurePageComponent } from './configure-page/configure-page.component';
import { LeadManagementConfigComponent } from './configure-page components/lead-management-config/lead-management-config.component';

export const routes: Routes = [
    {path:"configure",component:LeadManagementConfigComponent},
    {path:"",component:ConfigurePageComponent},
];
