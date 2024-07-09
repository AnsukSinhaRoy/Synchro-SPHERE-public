import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Function1Component } from '../../sync-native-Functions/function1/function1.component';
import { Function2Component } from '../../sync-native-Functions/function2/function2.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
  functions: any[] = [];

  @Output() functionSelected = new EventEmitter<any>();

  ngOnInit(): void {
    // Initialize the functions array with demo values
    this.functions = [
      { name: 'Function 1', component: Function1Component },
      { name: 'Function 2', component: Function2Component }
      // Add other functions as needed
    ];
  }

  selectFunction(func: any) {
    this.functionSelected.emit(func.component);
  }
}