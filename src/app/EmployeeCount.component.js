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
var EmployeeCount = /** @class */ (function () {
    function EmployeeCount() {
        this.SelectedRadioButtonValue = "All";
        this.countRadiobuttonselectionchange = new core_1.EventEmitter();
    }
    EmployeeCount.prototype.onslectionchange = function () {
        this.countRadiobuttonselectionchange.emit(this.SelectedRadioButtonValue);
        console.log(this.SelectedRadioButtonValue);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EmployeeCount.prototype, "countRadiobuttonselectionchange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeeCount.prototype, "all", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeeCount.prototype, "male", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeeCount.prototype, "feMale", void 0);
    EmployeeCount = __decorate([
        core_1.Component({
            selector: "Employe-Count",
            templateUrl: "app/EmployeeCount.html"
        })
    ], EmployeeCount);
    return EmployeeCount;
}());
exports.EmployeeCount = EmployeeCount;
//# sourceMappingURL=EmployeeCount.component.js.map