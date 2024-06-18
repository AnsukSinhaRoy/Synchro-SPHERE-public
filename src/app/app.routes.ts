import { RouterModule, Routes } from '@angular/router';
import { ConfigurePageComponent } from './configure-page/configure-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ThanksComponent } from './thanks/thanks.component';

export const routes: Routes = [
    {path:'configure',component:ConfigurePageComponent},
    {path:'dashboard',component:DashboardPageComponent},
    {path:'', component:LandingPageComponent},
    {path:'landing', component:LandingPageComponent},
    {path:'welcome', component:WelcomePageComponent},
    {path:'thanks', component:ThanksComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }