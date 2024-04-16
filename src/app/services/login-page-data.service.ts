import { Injectable } from '@angular/core';
import { ERPModule } from './Interfaces/erpmodule.interface';
import { LandingPageDataService } from './landing-page-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginPageDataService {

  constructor(private _LandingPagedataservice: LandingPageDataService,) { }
  modules: ERPModule[] = [{ name: 'Customer Relationship Management (CRM)', checked: false, available: false, clickable: false, description: 'This component interacts with the customers using data analysis to study large amount of information. They target the audience and observe what is beneficial for them. The component gathers customer data from multiple channels. Hence, CRM stores detailed information on overall purchase history, personal info, and even purchasing behavior patterns.' },
  { name: 'Finance', checked: false, available: false, clickable: false, description: 'It keeps a track on all your financial data including Accounts receivable, Accounts payable, General ledger, costs, budgets and forecasts. It helps to keep a record of cash flow, lower costs, increase profits and make sure that all the bills are paid on time.' },
  { name: 'Human Resources (HR)', checked: false, available: false, clickable: false, description: 'It is a software handling all personal-related tasks for managers and employees. Employees play a very important role in any organization, without them business would not exist. This component is responsible for automated payments to employees, payment of taxes, generating performance reports, attendance tracking, promotions, deciding working hours and holiday hours of the staff.' },
  { name: 'Manufacturing and logistics', checked: false, available: false, clickable: false, description: 'It as a group of applicants for planning, production, taking orders and delivering the products to the customers. It provides you a view of the demanded and achieved levels which is very important to check whether you are achieving your targets or not. It provides all the stock summary and production plans beneficial for the business.' },
  { name: 'Supply Chain Management (SCM)', checked: false, available: false, clickable: false, description: 'A supply chain management is a network of facilities that perform the procurement of the materials and transformation of these materials into intermediate and finalized products and distribution of these products to the customers. Planning, Manufacturing, Marketing, Distribution and the purchasing organizations through a supply chain operate independently.' },
  ];
  userData: any;
  mode: string = 'dashboard'

  initializeUserData() {
    this.userData = {
      "userId": "user123",
      "organizationName": "org123",
      "module_access_to_org":
        [
          "Customer Relationship Management (CRM)",
          "Human Resources (HR)",
          "Finance",
        ],
      "module_access_to_user":
        [
          "Customer Relationship Management (CRM)",
        ],
      "role":
      {
        "name": "admin",
        "permission":
        {
          "configure": false,
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
