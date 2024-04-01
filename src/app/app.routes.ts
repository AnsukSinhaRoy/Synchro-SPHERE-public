import { Routes } from '@angular/router';
import { ConfigurePageComponent } from './configure-page/configure-page.component';
import { AssignFucntionsToRolesComponent } from './shared/components/assign-fucntions-to-roles/assign-fucntions-to-roles.component';
import { LeadManagementConfigComponent } from './lead-management-config/lead-management-config.component';

export const routes: Routes = [
    {path:"configure",component:LeadManagementConfigComponent},
    {path:"",component:ConfigurePageComponent},
    {path:"new", component:AssignFucntionsToRolesComponent}
];
