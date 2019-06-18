"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeFor = /** @class */ (function () {
    function EmployeeFor() {
        this.EmployeeDetails = [
            { Name: "Biswajit", Age: 30 },
            { Name: "Biswa", Age: 40 },
            { Name: "Biswajee", Age: 10 },
            { Name: "Biswaj", Age: 20 },
            { Name: "Senapati", Age: 500 }
        ];
    }
    EmployeeFor = __decorate([
        core_1.Component({
            selector: "ng-for",
            templateUrl: "app/Employeefor.html"
        })
    ], EmployeeFor);
    return EmployeeFor;
}());
exports.EmployeeFor = EmployeeFor;
//# sourceMappingURL=Employeengfor.js.map