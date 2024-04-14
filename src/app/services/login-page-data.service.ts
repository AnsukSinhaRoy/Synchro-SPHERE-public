import { Injectable } from '@angular/core';
import { ERPModule } from './Interfaces/erpmodule.interface';
import { LandingPageDataService } from './landing-page-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginPageDataService {

  constructor(private _LandingPagedataservice: LandingPageDataService,) { }
  modules: ERPModule[] = [];

  userData: any;
  ;

  initializeUserData() {
    this.userData = {
      "userId": "user123",
      "organizationName": "org123",
      "module_access_to_org": [
        "Customer Relationship Management (CRM)",
        "Human Resources (HR)",
        "Finance",
      ],
      "module_access_to_user": [
        "Customer Relationship Management (CRM)",
        "Human Resources (HR)"
      ],
      "role": {
        "name": "admin",
        "permission": {
          "configure": true,
          "create": true,
          "read": true,
          "update": true,
          "delete": true,
        }
      },
      "mode": "dashboard",

    };
    const accessibleModules = this.userData.module_access_to_user;
  const accessibleModulestoOrg = this.userData.module_access_to_org;
  this.modules = this._LandingPagedataservice.getModules().map(module => {
    if (accessibleModules.includes(module.name)) {
      module.checked = true;
      module.available = true;
      module.clickable = true;
    } else if (accessibleModulestoOrg.includes(module.name)) {
      module.checked = true;
      module.available = true;
      module.clickable = false;
    }
    return module;
  }).filter(module => module.checked);

  console.log('userdarta was innitialized ', this.getUserData())
  console.log("Module access to user",this.modules)
}
  getUserData() {
    return this.userData ? this.userData : '';
  }
  getOrganizationName() {
    return this.userData ? this.userData.organizationName : '';
  }
  getModules() {
    return this.modules;
  }
}
