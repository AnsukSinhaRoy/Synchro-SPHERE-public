import { RouterModule, Routes } from '@angular/router';
import { ConfigurePageComponent } from './configure-page/configure-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddRolesComponent } from './shared/add-roles/add-roles.component';
import { WelcomePageComponent } from './landing-page components/welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { ShowSelectedCardsComponent } from './shared/show-selected-cards/show-selected-cards.component';
import { LoginComponent } from './shared/login/login.component';

export const routes: Routes = [
    {path:'configure',component:ConfigurePageComponent},
    /*{path:'', component:WelcomePageComponent},*/
    {path:'', component:LandingPageComponent},
    {path:'landing', component:LandingPageComponent},
    {path:'welcome', component:WelcomePageComponent},
    {path:'try', component:LoginComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }