import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {Component, inject} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';

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
     MatButtonToggleModule],
  templateUrl: './lead-management-config.component.html',
  styleUrl: './lead-management-config.component.css'
})
export class LeadManagementConfigComponent {
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
}
