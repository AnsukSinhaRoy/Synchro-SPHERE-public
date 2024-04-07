import { RouterModule, Routes } from '@angular/router';
import { ConfigurePageComponent } from './configure-page/configure-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddRolesComponent } from './shared/add-roles/add-roles.component';
import { WelcomePageComponent } from './landing-page components/welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'configure',component:ConfigurePageComponent},
    /*{path:'', component:LandingPageComponent},*/
    {path:'', component:WelcomePageComponent},
    {path:'welcome', component:WelcomePageComponent},
    {path:'try', component:AddRolesComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }