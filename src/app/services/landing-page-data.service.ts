import { Injectable } from '@angular/core';
import { ERPModule } from '../Interfaces/erpmodule.interface';

@Injectable({
  providedIn: 'root'
})
export class LandingPageDataService {
  organizationName: string = 'DEMO ORGANIZATION NAME';
  modules: ERPModule[] = [
    { name: 'Customer Relationship Management (CRM)', checked: true, description:'This component interacts with the customers using data analysis to study large amount of information. They target the audience and observe what is beneficial for them. The component gathers customer data from multiple channels. Hence, CRM stores detailed information on overall purchase history, personal info, and even purchasing behavior patterns.' },
    { name: 'Finance', checked: true, description:'It keeps a track on all your financial data including Accounts receivable, Accounts payable, General ledger, costs, budgets and forecasts. It helps to keep a record of cash flow, lower costs, increase profits and make sure that all the bills are paid on time.' },
    { name: 'Human Resources (HR)', checked: true, description:'It is a software handling all personal-related tasks for managers and employees. Employees play a very important role in any organization, without them business would not exist. This component is responsible for automated payments to employees, payment of taxes, generating performance reports, attendance tracking, promotions, deciding working hours and holiday hours of the staff.' },
    { name: 'Manufacturing and logistics', checked: true, description:'It as a group of applicants for planning, production, taking orders and delivering the products to the customers. It provides you a view of the demanded and achieved levels which is very important to check whether you are achieving your targets or not. It provides all the stock summary and production plans beneficial for the business.' },
    { name: 'Supply Chain Management (SCM)', checked: true, description:'A supply chain management is a network of facilities that perform the procurement of the materials and transformation of these materials into intermediate and finalized products and distribution of these products to the customers. Planning, Manufacturing, Marketing, Distribution and the purchasing organizations through a supply chain operate independently.' },
    
  ];
  SelectedModule: string = '';
  constructor() {}
 //get methods
  setOrganizationName(name: string) {
    this.organizationName = name;
  }

  setModules(modules: ERPModule[]) {
    this.modules = modules;
  }
  setSelectedModule(name: string)
  {
    this.SelectedModule=name;
  }

  //set methods
  getOrganizationName() {
    return this.organizationName;
  }

  getModules() {
    return this.modules;
  }

  getSelectedModule()
  {
    return this.SelectedModule;
  }
}
