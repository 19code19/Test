import { Component,OnInit } from '@angular/core';
import { Iemployee } from '../employeeinterface';
import { EmployeeService } from '../app/EmployeeService';


@Component({
    selector: "lst-Employee",
    templateUrl: "app/Employeefor.html",
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    EmployeeDetails: Iemployee[];

    SelectedEmployeeRadioButtonValue: string = "All";

    constructor(private _employeeService: EmployeeService) { 
    //    this.EmployeeDetails = [
    //        { Name: "Ram", Age: 30, Gender:"Male"},
    //        { Name: "Biswa", Age: 40, Gender: "Male"},
    //        { Name: "Sam", Age: 10, Gender: "Male"},
    //        { Name: "Tom", Age: 20, Gender: "Male"},
    //        { Name: "Jennifer", Age: 50, Gender: "FeMale" }
    //];
    }
    ngOnInit()
    {
        this._employeeService.GetEmployee().retry(3).subscribe((employee) => this.EmployeeDetails = employee );
    };
    GetEmployees(): void {
        //this.EmployeeDetails = 
            //[
            //{ Name: "Ram", Age: 30, Gender: "Male" },
            //{ Name: "Biswa", Age: 40, Gender: "Male" },
            //{ Name: "Sam", Age: 10, Gender: "Male" },
            //{ Name: "Tom", Age: 20, Gender: "Male"},
            //{ Name: "Jennifer", Age: 50, Gender: "FeMale" },
            //{ Name: "John", Age: 28, Gender: "Male"}
           // ];
        this._employeeService.GetEmployee().subscribe((employee) => this.EmployeeDetails = employee);
    }
    trackByEmpName(index: number, Employee: any): string
    {
        return Employee.Name;
    }
    GetTotalEmployeeCount(): number {
        return this.EmployeeDetails.length;
    }
    GetTotalMaleEmployeeCount(): number {
        return this.EmployeeDetails.filter(x => x.Gender === "Male").length;

    }
    GetTotalFemaleEmployeeCount(): number {
        return this.EmployeeDetails.filter(x => x.Gender === "Female").length;
    }

    onemployeeselectionChange(selectedradiobuttonvalue: string): void
    {
        this.SelectedEmployeeRadioButtonValue = selectedradiobuttonvalue;
    }
}