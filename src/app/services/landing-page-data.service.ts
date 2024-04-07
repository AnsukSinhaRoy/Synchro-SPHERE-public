import { Injectable } from '@angular/core';
import { ERPModule } from '../landing-page/erpmodule.interface';

@Injectable({
  providedIn: 'root'
})
export class LandingPageDataService {
  organizationName: string = '';
  modules: ERPModule[] = [];
  landingPageData: any;
  constructor() { }

  setOrganizationName(name: string) {
    this.organizationName = name;
  }

  setModules(modules: ERPModule[]) {
    this.modules = modules;
  }
  setLandingPageData(data: any) {
    this.landingPageData = data;
    console.log(this.landingPageData)
  }

  getOrganizationName() {
    return this.organizationName;
  }

  getModules() {
    console.log(this.modules)
    return this.modules;
  }
}
