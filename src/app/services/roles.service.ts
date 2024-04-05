import { Injectable } from '@angular/core';
import { Roles } from '../configure page components/lead-management-config/lead-management-config.component';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  
  roles: Roles[] = [{name: 'Salesman'}, {name: 'BPO'}, {name: 'Sales Manager'}];

  constructor() {
  }

  getRoles(): Roles[] {
    // TODO: Fetch your roles data here
    console.log("here")
    console.log(this.roles)
    return this.roles;
  }
}
