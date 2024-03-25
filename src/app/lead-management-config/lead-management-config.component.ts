import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {Component, ViewChild, inject} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import { ChangeDetectorRef } from '@angular/core';

export interface Roles {
  name: string;
}

@Component({
  selector: 'app-lead-management-config',
  standalone: true,
  imports: [MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
     MatChipsModule, 
     MatIconModule, 
     MatButtonModule, 
     MatSelectModule,
     MatTableModule,
     MatButtonToggleModule],
  templateUrl: './lead-management-config.component.html',
  styleUrl: './lead-management-config.component.css'
})
export class LeadManagementConfigComponent {
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(private changeDetectorRefs: ChangeDetectorRef) {}
 //ASSIGN ROLES
 addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  roles: Roles[] = [{name: 'Salesman'}, {name: 'BPO'}, {name: 'Sales Manager'}];
  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.roles.push({name: value});
    }
    event.chipInput!.clear();
  }

  remove(roles: Roles): void {
    const index = this.roles.indexOf(roles);

    if (index >= 0) {
      this.roles.splice(index, 1);

      this.announcer.announce(`Removed ${roles}`);
    }

  }
  edit(roles: Roles, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.remove(roles);
      return;
    }
    const index = this.roles.indexOf(roles);
    if (index >= 0) {
      this.roles[index].name = value;
    }
  }
  //ASSIGN ROLES
  //ASSIGN FUNCTIONS
  displayedColumns: string[] = ['role', 'create', 'read', 'update', 'delete'];
  _selectedRole: string = "";
  selectedFunctions: string[] = [];
  permissions: {role: string, functions: string[]}[] = [];

  confirm() {
    // Find the index of the role in the permissions array
    if(this.selectedRole){const index = this.permissions.findIndex(permission => permission.role === this.selectedRole);

      if (index >= 0) {
        // If the role already exists in the permissions array, update its functions
        this.permissions[index].functions = this.selectedFunctions;
      } else {
        // If the role does not exist in the permissions array, add a new entry
        this.permissions.push({role: this.selectedRole, functions: this.selectedFunctions});
      }
  
      this.selectedRole = '';
      this.selectedFunctions = [];
  
      // Detect changes and refresh table
      this.changeDetectorRefs.detectChanges();
      this.table.renderRows();}
    else {console.log("NO ROLE IS SELECTED")}
  }
  set selectedRole(value: string) {
    this._selectedRole = value;
  
    // Find the permissions for the selected role
    const permission = this.permissions.find(permission => permission.role === value);
  
    if (permission) {
      // If permissions for the selected role exist, set selectedFunctions to its functions
      this.selectedFunctions = permission.functions;
    } else {
      // If permissions for the selected role do not exist, clear selectedFunctions
      this.selectedFunctions = [];
    }
  }
  get selectedRole(): string {
    return this._selectedRole;
  }
    
}
