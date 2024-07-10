import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Function1Component } from '../../sync-native-Functions/function1/function1.component';
import { Function2Component } from '../../sync-native-Functions/function2/function2.component';
import { Function3Component } from '../../sync-native-Functions/function3/function3.component';
import { Function4Component } from '../../sync-native-Functions/function4/function4.component';
import { Function5Component } from '../../sync-native-Functions/function5/function5.component';
import { LandingPageComponent } from '../../landing-page/landing-page.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, NgFor, NgClass],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  functions: any[] = [];
  activeFunction: any;

  @Output() functionSelected = new EventEmitter<any>();

  ngOnInit(): void {
    // Initialize the functions array with demo values
    this.functions = [
      { name: 'Function 1', component: Function1Component },
      { name: 'Function 2', component: Function2Component },
      { name: 'Function 3', component: Function3Component },
      { name: 'Function 4', component: Function4Component },
      { name: 'Function 5', component: LandingPageComponent },
      // Add other functions as needed
    ];

    // Set the active function to the first function
    if (this.functions.length > 0) {
      this.activeFunction = this.functions[0];
      this.functionSelected.emit(this.activeFunction.component);
    }
  }

  selectFunction(func: any) {
    this.activeFunction = func;
    this.functionSelected.emit(func.component);
  }
}
