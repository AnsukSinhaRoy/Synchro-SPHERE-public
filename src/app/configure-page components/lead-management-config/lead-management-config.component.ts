import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormArray, AbstractControl} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {Component, ViewChild, inject, ChangeDetectorRef, NgModule} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { RolesService } from '../../services/roles.service'; 
import { DialogAddEmployeeComponent } from '../../shared/dialog-add-employee/dialog-add-employee.component';
export interface Roles {
  name: string;
}
export interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
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
     CommonModule,
     MatButtonToggleModule],
  templateUrl: './lead-management-config.component.html',
  styleUrl: './lead-management-config.component.css'
})
export class LeadManagementConfigComponent {
  @ViewChild(MatTable) table!: MatTable<any>;
  VOForm!: FormGroup;
  employees: Employee[] = [
    {id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Manager'},
  ];
  isLoading = true;
  dataSource = new MatTableDataSource<any>();

  constructor(
    private changeDetectorRefs: ChangeDetectorRef,
    private _formBuilder: FormBuilder,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private _roleserv:RolesService
  ) {
    this.VOForm = this._formBuilder.group({
      VORows: this._formBuilder.array([])
    });  
  }
  
  ngOnInit(): void {
    this.VOForm = this._formBuilder.group({
      VORows: this._formBuilder.array([])
    });
  
    this.employees = [
      
    ];
  
    this.VOForm = this.fb.group({
      VORows: this.fb.array(this.employees.map(val => this.fb.group({
        id: new FormControl(val.id),
        name: new FormControl(val.name),
        email: new FormControl(val.email),
        role: new FormControl(val.role),
        action: new FormControl('existingRecord'),
        isEditable: new FormControl(true),
        isNewRow: new FormControl(false),
      })))
    });
    this.isLoading = false;
    this.dataSource = new MatTableDataSource((this.VOForm.get('VORows') as FormArray).controls);
  
    const filterPredicate = this.dataSource.filterPredicate;
    this.dataSource.filterPredicate = (data: AbstractControl, filter) => {
      return filterPredicate.call(this.dataSource, data.value, filter);
    }
  }
 //ASSIGN ROLES
 addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  roles: Roles[] = [{name: 'Salesman'}, {name: 'BPO'}, {name: 'Sales Manager'}];
  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.roles.push({name: value});
      this.permissions.push({role: value, functions: ['NO', 'NO', 'NO', 'NO']});
    }
    this.changeDetectorRefs.detectChanges();
  this.table.renderRows();
    event.chipInput!.clear();
    this.setRoles();
  }

  remove(roles: Roles): void {
    const index = this.roles.indexOf(roles);
  
    if (index >= 0) {
      // Remove the role from the roles array
      this.roles.splice(index, 1);
  
      // Find the index of the role in the permissions array
      const permissionsIndex = this.permissions.findIndex(permission => permission.role === roles.name);
  
      if (permissionsIndex >= 0) {
        // If the role exists in the permissions array, remove it
        this.permissions.splice(permissionsIndex, 1);
      }
  
      this.announcer.announce(`Removed ${roles.name}`);
  
      // Detect changes and refresh table
      this.changeDetectorRefs.detectChanges();
      this.table.renderRows();
      this.setRoles();
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
  disableChips = true;
  permissions: {role: string, functions: string[]}[] = [
    {role: 'Salesman', functions: ['NO', 'NO', 'NO', 'NO']},
    {role: 'BPO', functions: ['NO', 'NO', 'NO', 'NO']},
    {role: 'Sales Manager', functions: ['NO', 'NO', 'NO', 'NO']}
  ];
  confirm() {
    // Find the index of the role in the permissions array
    if(this.selectedRole){
      const index = this.permissions.findIndex(permission => permission.role === this.selectedRole);
  
      if (index >= 0) {
        // If the role already exists in the permissions array, update its functions
        this.permissions[index].functions = this.selectedFunctions;
        this.disableChips = false;
      } else {
        // If the role does not exist in the permissions array, add a new entry
        this.permissions.push({role: this.selectedRole, functions: this.selectedFunctions});
      }
  
      this.selectedRole = '';
      this.selectedFunctions = [];
      this.disableChips = true;
  
      // Detect changes and refresh table
      this.changeDetectorRefs.detectChanges();
      this.table.renderRows();
    } else {
    }
  }
  set selectedRole(value: string) {
    this._selectedRole = value;
  
    // Find the permissions for the selected role
    const permission = this.permissions.find(permission => permission.role === value);
  
    if (permission) {
      // If permissions for the selected role exist, set selectedFunctions to its functions
      this.selectedFunctions = permission.functions;
      this.disableChips = false;
    } else {
      // If permissions for the selected role do not exist, clear selectedFunctions
      this.selectedFunctions = [];
      this.disableChips = true;
    }
  }
  get selectedRole(): string {
    return this._selectedRole;
  }
  //ASSIGN FUNCTIONS
  //ENTER EMPLOYEES
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddEmployeeComponent, {
      width: '250px',   
      height:'400px',
      data: {id: '', name: '', email: '', role: ''}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addEmployee(result);
      }
    });
    
  }
  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.dataSource = new MatTableDataSource(this.employees);
    this.table.renderRows();
  }
  
  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.employees);
  }
  setRoles(){
    this._roleserv.roles=this.roles;
  }
  
  //ENTER EMPLOYEES
}