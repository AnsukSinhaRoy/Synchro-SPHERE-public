import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatButtonModule } from '@angular/material/button';
import { Component, } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { CrmDataService } from '../../services/crm-data.service';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RolePermission } from '../../services/Interfaces/RolePermission.interface';
import { MatCardModule } from '@angular/material/card';
import { LoginPageDataService } from '../../services/login-page-data.service';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-customer-relationship-management-config',
  standalone: true,
  imports: [MatButtonModule,
    MatStepperModule,
    CommonModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule, MatChipsModule, MatIconModule,
    MatSelectModule, MatExpansionModule, MatCheckboxModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  templateUrl: './customer-relationship-management-config.component.html',
  styleUrl: './customer-relationship-management-config.component.css'
})
export class CustomerRelationshipManagementConfigComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  roles: string[] = [];
  submodules: string[] = [];
  selectedSubModules: string[] = [];
  addOnBlur = true;
  permissions!: RolePermission[];
  selectedRolePermissions: any = {};

  selectedRole!: string;

  constructor(private _crmdataservice: CrmDataService, private _loginpagedataservice: LoginPageDataService) {
    this._crmdataservice.fetch_CRM_Configuration_Data().subscribe((crmdata: any) => {
      this.submodules = this._crmdataservice.getSubmodules();
      console.log("submodules at CRMConfig")
      this.selectedSubModules = this._crmdataservice.getSelectedSubmodules();
      this.roles = this._crmdataservice.getRoleNames();
      this.permissions = this._crmdataservice.getRolesAndPermissions();
    });
  }

  updatePermissionsForRole(role: string) {
    const rolePermissions = this.permissions.find(permission => permission.name === role);
    this.selectedRolePermissions = {};
    for (let submodule of this.selectedSubModules) {
      const existingPermissions = rolePermissions ? rolePermissions.permissions.find(perm => perm.submodule === submodule) : null;
      this.selectedRolePermissions[submodule] = existingPermissions ? existingPermissions : { create: false, read: false, update: false, delete: false };
    }
  }
  updateSelectedSubmodules(selectedSubmodules: string[]) {
    this.selectedSubModules = selectedSubmodules;
    this._crmdataservice.setSelectedSubmodules(selectedSubmodules);
  }
  updatePermissions() {
    // Find the RolePermission for the selected role
    let rolePermission = this.permissions.find(permission => permission.name === this.selectedRole);
  
    // If it doesn't exist, create a new one and add it to permissions
    if (!rolePermission) {
      rolePermission = {name: this.selectedRole, permissions: []};
      this.permissions.push(rolePermission);
    }
  
    // Convert selectedRolePermissions to an array of permissions
    const newPermissions = Object.entries(this.selectedRolePermissions).map(([submodule, actions]) => {
      if (typeof actions === 'object' && actions !== null) {
        return {submodule, ...actions};
      } else {
        // Handle the case where actions is not an object
        console.error(`Actions for submodule ${submodule} is not an object`);
        return null;
      }
    }).filter(permission => permission !== null);
  
    // Merge newPermissions into rolePermission
    rolePermission.permissions = newPermissions as { submodule: string; create: boolean; read: boolean; update: boolean; delete: boolean; }[];
  
    // Update the roles and permissions in the service
    this._crmdataservice.setRolesAndPermissions(this.permissions);
  }
  stepperChanged(event: any) {
    switch (event.selectedIndex) {
      case 0:
        console.log(1);
        break;
      case 1:
        console.log(this.permissions)
        this._crmdataservice.setSelectedSubmodules(this.selectedSubModules);
        this.updatePermissionsForRole(this.selectedRole)
        break;
      case 2:
        console.log(3);
        break;
      case 3:
        console.log(4);
        break;
      default:
        console.log("default");
        break;
    }
  }

  isSelected(submodule: string): boolean {
    return this._crmdataservice.getSelectedSubmodules().includes(submodule);
  }
  onSelectionChange(event: MatSelectionListChange) {
    this.updateSelectedSubmodules(event.source.selectedOptions.selected.map(option => option.value));
  }

  addRole(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add role
    if ((value || '').trim()) {
      const role = value.trim();
      // Check if role already exists
      if (!this.roles.includes(role)) {
        this.roles.push(role);
      } else {
        console.log(`Role "${role}" already exists.`);
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    // Update the roles in the service
    this._crmdataservice.setRoles(this.roles);
  }
  removeRole(role: string): void {
    if (this.selectedRole === role) {
      this.selectedRolePermissions={};
      this.selectedRole = ''; // or null
    }
    const index = this.roles.indexOf(role);
    if (index >= 0) {
      this.roles.splice(index, 1);
    }
    // Update the roles in the service
    this._crmdataservice.setRoles(this.roles);
  }
  // ...
  edit(roles: string, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.removeRole(roles);
      return;
    }
    const index = this.roles.indexOf(roles);
    if (index >= 0) {
      this.roles[index] = value;
    }
  }
  
}