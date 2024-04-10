import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipEditedEvent, MatChipInputEvent, MatChipRow, MatChipsModule } from '@angular/material/chips';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
export interface Roles {
  name: string;
}
@Component({
  selector: 'app-add-roles',
  standalone: true,
  imports: [MatIcon,ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatSelectModule,MatChipsModule],
  templateUrl: './add-roles.component.html',
  styleUrl: './add-roles.component.css'
})

export class AddRolesComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  roles: Roles[] = [{name: 'Salesman'}, {name: 'BPO'}, {name: 'Sales Manager'}];

  constructor(
    private changeDetectorRefs: ChangeDetectorRef,
    private announcer: LiveAnnouncer
  ) { }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.roles.push({name: value});
    }
    this.changeDetectorRefs.detectChanges();
    event.chipInput!.clear();
  }

  remove(roles: Roles): void {
    const index = this.roles.indexOf(roles);
  
    if (index >= 0) {
      this.roles.splice(index, 1);
      this.announcer.announce(`Removed ${roles.name}`);
      this.changeDetectorRefs.detectChanges();
    }
  }
}