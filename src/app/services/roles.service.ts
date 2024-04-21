import { Injectable } from '@angular/core';
import { Roles } from '../configure-page components/customer-relationship-management-config/customer-relationship-management-config.component';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  
  roles: Roles[] = [{name: 'Salesman'}, {name: 'BPO'}, {name: 'Sales Manager'}];

  constructor() {
  }


  setRoles(): Roles[] {
    return this.roles;
  }
}
