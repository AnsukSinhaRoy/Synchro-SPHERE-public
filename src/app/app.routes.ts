import { RouterModule, Routes } from '@angular/router';
import { ConfigurePageComponent } from './configure-page/configure-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddRolesComponent } from './shared/add-roles/add-roles.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { ShowSelectedCardsComponent } from './shared/show-selected-cards/show-selected-cards.component';
import { LoginComponent } from './shared/login/login.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CustomerRelationshipManagementConfigComponent } from './configure-page components/customer-relationship-management-config/customer-relationship-management-config.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

export const routes: Routes = [
    {path:'configure',component:ConfigurePageComponent},
    {path:'dashboard',component:DashboardPageComponent},
    /*{path:'', component:WelcomePageComponent},*/
    {path:'', component:LandingPageComponent},
    {path:'landing', component:LandingPageComponent},
    {path:'welcome', component:WelcomePageComponent},
    {path:'thanks', component:ThankYouComponent},
    {path:'try', component:CustomerRelationshipManagementConfigComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }