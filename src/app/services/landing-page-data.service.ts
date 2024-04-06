import { Injectable } from '@angular/core';
import { ERPModule } from '../landing-page/erpmodule.interface';

@Injectable({
  providedIn: 'root'
})
export class LandingPageDataService {
  organizationName: string = '';
  modules: ERPModule[] = [];

  constructor() { }

  setOrganizationName(name: string) {
    this.organizationName = name;
  }

  setModules(modules: ERPModule[]) {
    this.modules = modules;
  }

  getOrganizationName() {
    return this.organizationName;
  }

  getModules() {
    console.log(this.modules)
    return this.modules;
  }
}
