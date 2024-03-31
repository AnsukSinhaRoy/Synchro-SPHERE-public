import { Routes } from '@angular/router';
import { ConfigurePageComponent } from './configure-page/configure-page.component';
import { AssignFucntionsToRolesComponent } from './shared/components/assign-fucntions-to-roles/assign-fucntions-to-roles.component';

export const routes: Routes = [
    {path:"configure",component:AssignFucntionsToRolesComponent,
children:[{
    path:"new", component:AssignFucntionsToRolesComponent
}]},
    {path:"",component:ConfigurePageComponent}
];
