import { Injectable } from '@angular/core';
import { RolePermission } from '../services/Interfaces/RolePermission.interface';
import { MasterDataService } from './master-data.service';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmDataService {

  constructor(private masterDataService: MasterDataService) {
  }

  crmdata: any;

  fetch_CRM_Configuration_Data(): Observable<any> {
    // Return the Observable from fetchsubmodules()

    return this.masterDataService.fetchsubmodules('CRM').pipe(
      map((data: any) => {
        // Transform the data into the desired format
        return {
          submodules: data.submodules,
          selectedSubmodules: [],
          roles: [],
          rolesAndPermissions: []
        };
      }),
      tap((crmdata: any) => {
        // Set the crmdata property
        this.crmdata = crmdata;
        console.log("CRM configuration data fetched: ", this.crmdata);
      }),
      catchError((error: any) => {
        console.error('Error fetching CRM configuration data:', error);
        // Handle the error (e.g., by returning an empty object)
        return of({});
      })
    );
  }
  fetch_preconfigured_CRM_Configuration_Data() {
    this.crmdata =
    {
      "submodules":
        [
          "Customer Registration",
          "Vender Registration",
          "Lead Management",
          "Ticket Management",
          "Vender Quotation Management",
          "Customer Quotation Management",
          "Report",
          "Configuration",
        ],
      "selectedSubmodules":
        [
          "Customer Registration",
          "Vender Registration",
          "Lead Management",
          "Ticket Management",
        ],
      "roles":
        [
          "Admin",
          "Manager",
        ],
      "rolesAndPermissions": [
        {
          "name": "Admin",
          "permissions": [
            {
              "submodule": "Customer Registration",
              "create": true,
              "read": true,
              "update": true,
              "delete": true
            },
            {
              "submodule": "Vender Registration",
              "create": false,
              "read": true,
              "update": true,
              "delete": false
            },
          ]
        },
        {
          "name": "Manager",
          "permissions": [
            {
              "submodule": "Customer Registration",
              "create": true,
              "read": true,
              "update": false,
              "delete": false
            },
            {
              "submodule": "Lead Management",
              "create": true,
              "read": true,
              "update": true,
              "delete": false
            },
          ]
        },
      ]
    };
  }
  getSubmodules() {
    return this.crmdata.submodules;
  }
  getRoleNames() {
    return this.crmdata.roles;
  }
  getRolesAndPermissions(): RolePermission[] {
    return this.crmdata.rolesAndPermissions;
  }
  getSelectedSubmodules() {
    return this.crmdata.selectedSubmodules;
  }


  setSelectedSubmodules(selectedSubmodules: string[]) {
    this.crmdata.selectedSubmodules = selectedSubmodules;
    console.log(this.crmdata);
  }
  setRoles(newRoles: string[]) {
    // Check if any old role is removed
    const oldRoles = this.crmdata.roles;
    const removedRoles = oldRoles.filter((role: string) => !newRoles.includes(role));

    // If some old role is removed and that role had some data in rolesAndPermissions
    removedRoles.forEach((removedRole: any) => {
      const roleInRolesAndPermissions = this.crmdata.rolesAndPermissions.find((role: { name: any; }) => role.name === removedRole);
      if (roleInRolesAndPermissions) {
        // Show a message to confirm the delete
        console.log(`The role ${removedRole} has been removed. This role had some data in rolesAndPermissions.`);
      }
    });

    // Replace the old array inside crmdata with the new array
    this.crmdata.roles = newRoles;
  }
  setRolesAndPermissions(newRolesAndPermissions: RolePermission[]) {
    this.crmdata.rolesAndPermissions = newRolesAndPermissions;
  }

}
