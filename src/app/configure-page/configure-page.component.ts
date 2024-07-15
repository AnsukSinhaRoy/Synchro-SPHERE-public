import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomerRelationshipManagementConfigComponent } from '../configure-page components/customer-relationship-management-config/customer-relationship-management-config.component';
import { ERPModule } from '../services/Interfaces/erpmodule.interface';
import { Router } from '@angular/router';
import { LoginPageDataService } from '../services/login-page-data.service';
import { CrmDashboardComponent } from '../Dashboard-page-components/crm-dashboard/crm-dashboard.component';
import { MasterDataService } from '../services/master-data.service';
import { StateVariablesService } from '../services/state-variables.service';
import { RolePermission } from '../services/Interfaces/RolePermission.interface';
import { CrmDataService } from '../services/crm-data.service';
@Component({
  selector: 'app-configure-page',
  standalone: true,
  imports: [MatTabsModule, CustomerRelationshipManagementConfigComponent, CrmDashboardComponent],
  templateUrl: './configure-page.component.html',
  styleUrl: './configure-page.component.css'
})

export class ConfigurePageComponent {

  modules: ERPModule[] = [];
  selectedIndex = 0;
  selectedModuleid: number;
  permissionsData!: {
    module: {
      submodules: string[],
      selectedSubmodules: string[]
    },
    roles: string[],
    rolesAndPermissions: RolePermission[]
  };

  constructor(private _statemanagementservice: StateVariablesService,
    public _logindataservice: LoginPageDataService,
    private router: Router,
    private _masterdata: MasterDataService,
    private _crmdataservice: CrmDataService) {
    this.modules = this._masterdata.modules.filter(module => module.checked);
    this.selectedModuleid = this._statemanagementservice.SelectedModuleid;
    if (this._masterdata.modules.filter(module => module.available === true).length !== 0) {
      this.modules = this._masterdata.modules.filter(module => module.clickable === true)
      const selectedModuleIndex = this.modules.findIndex(module => module.id === this.selectedModuleid);
      if (selectedModuleIndex !== -1) {
        // If a module with the selectedModuleName exists, select it
        this.selectedIndex = selectedModuleIndex;
      } else {
        // Otherwise, select the first checked module
        const checkedModuleIndex = this.modules.findIndex(module => module.clickable);

        if (checkedModuleIndex !== -1) {
          this.selectedIndex = checkedModuleIndex;
        }
      }
    }
    else {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this._crmdataservice.fetch_CRM_Configuration_Data().subscribe((crmdata: any) => {
      this.permissionsData = {
        module: {
          submodules: this._crmdataservice.getSubmodules(),
          selectedSubmodules: this._crmdataservice.getSelectedSubmodules()
        },
        roles: this._crmdataservice.getRoleNames(),
        rolesAndPermissions: this._crmdataservice.getRolesAndPermissions()
      };
    });
  }

  updatePermissionsForRole(role: string, selectedSubModules: string[]) {
    const rolePermissions = this.permissionsData.rolesAndPermissions.find(permission => permission.name === role);
    const selectedRolePermissions: any = {};
    for (let submodule of selectedSubModules) {
      const existingPermissions = rolePermissions ? rolePermissions.permissions.find(perm => perm.submodule === submodule) : null;
      selectedRolePermissions[submodule] = existingPermissions ? existingPermissions : { create: false, read: false, update: false, delete: false };
    }
    return selectedRolePermissions;
  }

  updateSelectedSubmodules(selectedSubmodules: string[]) {
    this.permissionsData.module.selectedSubmodules = selectedSubmodules;
    this._crmdataservice.setSelectedSubmodules(selectedSubmodules);
  }

  updatePermissions(role: string, selectedRolePermissions: any) {
    let rolePermission = this.permissionsData.rolesAndPermissions.find(permission => permission.name === role);
  
    if (!rolePermission) {
      rolePermission = { name: role, permissions: [] };
      this.permissionsData.rolesAndPermissions.push(rolePermission);
    }
  
    const newPermissions = Object.entries(selectedRolePermissions).map(([submodule, actions]) => {
      if (typeof actions === 'object' && actions !== null) {
        return { submodule, ...actions };
      } else {
        console.error(`Actions for submodule ${submodule} is not an object`);
        return null;
      }
    }).filter(permission => permission !== null);
  
    rolePermission.permissions = newPermissions as { submodule: string; create: boolean; read: boolean; update: boolean; delete: boolean; }[];
  
    this._crmdataservice.setRolesAndPermissions(this.permissionsData.rolesAndPermissions);
  }
}
