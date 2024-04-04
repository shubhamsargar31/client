import { Component } from '@angular/core';
import { HeaderMergedComponent } from "../header-merged/header-merged.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-all-studetn-list',
    standalone: true,
    templateUrl: './all-studetn-list.component.html',
    styleUrl: './all-studetn-list.component.css',
    imports: [HeaderMergedComponent,CommonModule]
})
export class AllStudetnListComponent {

  fun(){
    console.log(this.students);
    
  }

  students: any[] = [
    { rollNo: '233206', name: 'Manas Chnadrashekhar patil' },
    { rollNo: '233207', name: 'shubham Dhondiram Sargar' },
    // Add more student data here
  ];
  teachers: any[] = [
    { srNo: '01', name: 'Mr. Pravin Maruti Rupnar' },
    { srNo: '02', name: 'Mr. Suraj shantinath Upadhye' },
    // Add more teacher data here
  ];

    selectedRole: string = 'student'; // Default role is 'student'

  constructor() {}

  // Method to handle role changes
  onRoleChange(role: string) {
    this.selectedRole = role;
  }

}
