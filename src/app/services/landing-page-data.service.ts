import { Injectable } from '@angular/core';
import { ERPModule } from '../landing-page/erpmodule.interface';

@Injectable({
  providedIn: 'root'
})
export class LandingPageDataService {
  organizationName: string = 'DEMO ORGANIZATION NAME';
  modules: ERPModule[] = [
    { name: 'Finance', checked: true },
    { name: 'Human Resources (HR)', checked: true },
    { name: 'Manufacturing and logistics', checked: true },
    { name: 'Supply Chain Management (SCM)', checked: true },
    { name: 'Customer Relationship Management (CRM)', checked: true }
  ];
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
