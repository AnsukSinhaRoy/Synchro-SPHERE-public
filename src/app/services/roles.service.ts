import { Injectable } from '@angular/core';
import { Roles } from '../configure-page components/lead-management-config/lead-management-config.component';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  
  roles: Roles[] = [{name: 'Salesman'}, {name: 'BPO'}, {name: 'Sales Manager'}];

  constructor() {
  }


  setRoles(): Roles[] {
    console.log("ROLES SERVICE SAYS")
    console.log(this.roles)
    return this.roles;
  }
}
