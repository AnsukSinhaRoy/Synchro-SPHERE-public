import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-syncrosphere-dashboard',
  standalone: true,
  imports: [MatSidenavModule, RouterOutlet, SidenavComponent, HeaderComponent],
  templateUrl: './syncrosphere-dashboard.component.html',
  styleUrl: './syncrosphere-dashboard.component.css'
})
export class SyncrosphereDashboardComponent {
  mode: MatDrawerMode = 'side';
  sideBarOpen = true;
  currentComponent: ComponentRef<any> | null = null;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  onDrawerOpenedChange(opened: boolean) {
    if (!opened && this.mode === 'over') {
      this.sideBarOpen = false;
    }
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  loadComponent(component: any) {
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }
    const factory = this.resolver.resolveComponentFactory(component);
    this.currentComponent = this.container.createComponent(factory);
  }
}