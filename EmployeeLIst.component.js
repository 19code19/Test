"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService_1 = require("../app/EmployeeService");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.SelectedEmployeeRadioButtonValue = "All";
        //    this.EmployeeDetails = [
        //        { Name: "Ram", Age: 30, Gender:"Male"},
        //        { Name: "Biswa", Age: 40, Gender: "Male"},
        //        { Name: "Sam", Age: 10, Gender: "Male"},
        //        { Name: "Tom", Age: 20, Gender: "Male"},
        //        { Name: "Jennifer", Age: 50, Gender: "FeMale" }
        //];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.GetEmployee().retry(3).subscribe(function (employee) { return _this.EmployeeDetails = employee; });
    };
    ;
    EmployeeListComponent.prototype.GetEmployees = function () {
        var _this = this;
        //this.EmployeeDetails = 
        //[
        //{ Name: "Ram", Age: 30, Gender: "Male" },
        //{ Name: "Biswa", Age: 40, Gender: "Male" },
        //{ Name: "Sam", Age: 10, Gender: "Male" },
        //{ Name: "Tom", Age: 20, Gender: "Male"},
        //{ Name: "Jennifer", Age: 50, Gender: "FeMale" },
        //{ Name: "John", Age: 28, Gender: "Male"}
        // ];
        this._employeeService.GetEmployee().subscribe(function (employee) { return _this.EmployeeDetails = employee; });
    };
    EmployeeListComponent.prototype.trackByEmpName = function (index, Employee) {
        return Employee.Name;
    };
    EmployeeListComponent.prototype.GetTotalEmployeeCount = function () {
        return this.EmployeeDetails.length;
    };
    EmployeeListComponent.prototype.GetTotalMaleEmployeeCount = function () {
        return this.EmployeeDetails.filter(function (x) { return x.Gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.GetTotalFemaleEmployeeCount = function () {
        return this.EmployeeDetails.filter(function (x) { return x.Gender === "Female"; }).length;
    };
    EmployeeListComponent.prototype.onemployeeselectionChange = function (selectedradiobuttonvalue) {
        this.SelectedEmployeeRadioButtonValue = selectedradiobuttonvalue;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: "lst-Employee",
            templateUrl: "app/Employeefor.html",
            providers: [EmployeeService_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [EmployeeService_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=EmployeeLIst.component.js.map