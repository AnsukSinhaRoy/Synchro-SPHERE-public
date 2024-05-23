import { Injectable } from '@angular/core';
import { RolePermission } from '../services/Interfaces/RolePermission.interface';

@Injectable({
  providedIn: 'root'
})
export class CrmDataService {

  constructor() {
  }

  crmdata: any;

  fetch_CRM_Configuration_Data() {
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
        ],
      "roles":
        [
        ],
      "rolesAndPermissions":
        [
        ]
    };
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
