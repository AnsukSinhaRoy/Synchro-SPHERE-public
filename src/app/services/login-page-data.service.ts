import { Injectable } from '@angular/core';
import { ERPModule } from './Interfaces/erpmodule.interface';
import { MasterDataService } from './master-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginPageDataService {

  
  
  modules: ERPModule[] = this._masterdata.modules;
  userData: any;
  mode: string = 'dashboard'
  is_login: boolean=false;
  constructor(private _masterdata: MasterDataService,) { 
    
  }
  initializeUserData() {
    this.is_login=true;
    this.userData = {
      "userId": "user123",
      "organizationName": "Org name - login",
      "module_access_to_org":
        [
          1,
          2,
          4,
          5,
          6,
          9
        ],
      "module_access_to_user":
        [
          1,
          2,
        ],
      "role":
      {
        "name": "admin",
        "permission":
        {
          "configure": true,
          "create": true,
          "read": true,
          "update": true,
          "delete": true,
        },
      },
    };
    const accessibleModules = this.userData.module_access_to_user;
    const accessibleModulestoOrg = this.userData.module_access_to_org;
    
    this.modules = this.modules.map(module => {
      if (accessibleModules.includes(module.id)) {
        module.checked = true;
        module.available = true;
        module.clickable = true;
      } else if (accessibleModulestoOrg.includes(module.id)) {
        module.checked = true;
        module.available = true;
        module.clickable = false;
      }
      return module;
    }).filter(module => module.checked);
    console.log('userdarta was innitialized ', this.getUserData())
    console.log('Module access to user', this.modules)
  }
  setMode(mode: string) {
    this.mode = mode;
    console.log(this.mode);
  }

  // ------------ Get methods ----------
  getUserData() {
    return this.userData ? this.userData : '';
  }
  getOrganizationName() {
    return this.userData ? this.userData.organizationName : '';
  }
  getModules() {
    return this.modules;
  }
  getMode() {
    return this.mode;
  }

  getconfigurePermission() {
    if (this.userData) {
      return this.userData.role.permission.configure;
    } else {
      return false;
    }
  }
}
