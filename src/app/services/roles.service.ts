import { Injectable } from '@angular/core';
import { Roles } from '../lead-management-config/lead-management-config.component';
import { LeadManagementConfigComponent } from '../lead-management-config/lead-management-config.component';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  
  roles: Roles[] = [{name: 'Salesman'}, {name: 'BPO'}, {name: 'Sales Manager'}];

  constructor(/*private _lmc:LeadManagementConfigComponent*/) {
    //this.roles = _lmc.getRoles();
  }

  getRoles(): Roles[] {
    // TODO: Fetch your roles data here
    console.log("here")
    console.log(this.roles)
    return this.roles;
  }
}
