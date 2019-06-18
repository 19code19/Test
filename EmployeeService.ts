 import { Injectable } from '@angular/core';
import { Iemployee } from '../employeeinterface';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';





@Injectable()
export class EmployeeService {
    constructor(private _http:Http) {};

    //GetEmployee(): Iemployee[] {
    //    return [
    //        { Name: "Ram", Age: 30, Gender: "Male" },
    //        { Name: "Biswa", Age: 40, Gender: "Male" },
    //        { Name: "Sam", Age: 10, Gender: "Male" },
    //        { Name: "Tom", Age: 20, Gender: "Male"},
    //        { Name: "Jennifer", Age: 50, Gender: "FeMale" },
    //        { Name: "John", Age: 28, Gender: "Male"}
    //    ];
    //}
    GetEmployee(): Observable<Iemployee[]> {
        return this._http.get("http://localhost:53010/api/CustomerAPI/GetCustomersDataForAngular")
            .map((response:Response) => <Iemployee[]>response.json())
    }

}