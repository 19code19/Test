import { Component } from '@angular/core';

@Component({
    selector: "My-Employe",
    templateUrl:"app/Employee.html"
})

export class EmployeeComponent
{
    FirstName: string = "Biswajit";
    LastName: string = "Senapati";
    Age: string = "26";

}