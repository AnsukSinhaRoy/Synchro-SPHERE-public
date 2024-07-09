import { RouterModule, Routes } from '@angular/router';
import { ConfigurePageComponent } from './configure-page/configure-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ThanksComponent } from './shared/thanks/thanks.component';
import { SyncrosphereDashboardComponent } from './syncrosphere-dashboard/syncrosphere-dashboard.component';
import { Function1Component } from './sync-native-Functions/function1/function1.component';
import { Function2Component } from './sync-native-Functions/function2/function2.component';

export const routes: Routes = [
    {path:'configure',component:ConfigurePageComponent},
    {path:'dashboard',component:DashboardPageComponent},
    {path:'', component:LandingPageComponent},
    {path:'landing', component:LandingPageComponent},
    {path:'welcome', component:WelcomePageComponent},
    {path:'thanks', component:ThanksComponent},
    {
        path: 'syncdash', component: SyncrosphereDashboardComponent, children: [
          { path: 'function1', component: Function1Component },
          { path: 'function2', component: Function2Component }
          // Add other function routes here
        ]
      }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }
  