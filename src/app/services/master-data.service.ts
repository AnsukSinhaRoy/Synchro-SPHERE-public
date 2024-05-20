import { Injectable } from '@angular/core';
import { ERPModule } from './Interfaces/erpmodule.interface';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {

  constructor() { }
  modules: ERPModule[] = [
    { name: 'Customer Relationship Management (CRM)', checked: false, available: false, clickable: false, backgroundImage: 'CRM.png', gradient: 'linear-gradient(rgba(255, 255, 255, 0.7), rgb(83, 135, 212))',hoverGradient: 'linear-gradient(rgba(255, 255, 255, 0.5), rgb(0, 106, 226))', description: 'This component interacts with the customers using data analysis to study large amount of information. They target the audience and observe what is beneficial for them. The component gathers customer data from multiple channels. Hence, CRM stores detailed information on overall purchase history, personal info, and even purchasing behavior patterns.' },
    { name: 'Finance', checked: false, available: false, clickable: false, backgroundImage: 'Finance.png', gradient: 'linear-gradient(rgba(255, 255, 255, 0.7), rgb(124, 194, 151))',hoverGradient: 'linear-gradient(rgba(255, 255, 255, 0), rgb(1, 190, 80))', description: 'It keeps a track on all your financial data including Accounts receivable, Accounts payable, General ledger, costs, budgets and forecasts. It helps to keep a record of cash flow, lower costs, increase profits and make sure that all the bills are paid on time.' },
    { name: 'Human Resources (HR)', checked: false, available: false, clickable: false, backgroundImage: 'HR.png', gradient: 'linear-gradient(rgba(255, 255, 255, 0.7), rgb(196, 187, 111))',hoverGradient: 'linear-gradient(rgba(255, 255, 255, 0.5), rgb(190, 177, 1))', description: 'It is a software handling all personal-related tasks for managers and employees. Employees play a very important role in any organization, without them business would not exist. This component is responsible for automated payments to employees, payment of taxes, generating performance reports, attendance tracking, promotions, deciding working hours and holiday hours of the staff.' },
    { name: 'Manufacturing and logistics', checked: false, available: false, clickable: false, backgroundImage: 'MAL.png', gradient: 'linear-gradient(rgba(255, 255, 255, 0.7), rgb(93, 149, 201))',hoverGradient: 'linear-gradient(rgba(255, 255, 255, 0), rgb(6, 110, 207))', description: 'It as a group of applicants for planning, production, taking orders and delivering the products to the customers. It provides you a view of the demanded and achieved levels which is very important to check whether you are achieving your targets or not. It provides all the stock summary and production plans beneficial for the business.' },
    { name: 'Supply Chain Management (SCM)', checked: false, available: false, clickable: false, backgroundImage: 'SCM.png', gradient: 'linear-gradient(rgba(255, 255, 255, 0.7), rgb(194, 164, 124))',hoverGradient: 'linear-gradient(rgba(255, 255, 255, 0), rgb(190, 108, 1))', description: 'A supply chain management is a network of facilities that perform the procurement of the materials and transformation of these materials into intermediate and finalized products and distribution of these products to the customers. Planning, Manufacturing, Marketing, Distribution and the purchasing organizations through a supply chain operate independently.' },
  ];
}
