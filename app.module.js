"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var Employee_component_1 = require("./Employee.component");
var EmployeeLIst_component_1 = require("./EmployeeLIst.component");
var angular_1 = require("./angular");
var EmployeeCount_component_1 = require("./EmployeeCount.component");
var Home_component_1 = require("./Home/Home.component");
var PageNotFound_1 = require("./Error/PageNotFound");
var AppRoutes = [
    { path: 'Home', component: Home_component_1.Homecomponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: '**', component: PageNotFound_1.PageNotFound },
];
//, RouterModule.forRoot(AppRoutes)
//,Homecomponent,PageNotFound
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_2.ReactiveFormsModule, http_1.HttpModule, router_1.RouterModule, router_1.RouterModule.forRoot(AppRoutes)],
            declarations: [app_component_1.AppComponent, Employee_component_1.EmployeeComponent, EmployeeLIst_component_1.EmployeeListComponent, angular_1.GenderTitlePipe, EmployeeCount_component_1.EmployeeCount, Home_component_1.Homecomponent, PageNotFound_1.PageNotFound],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map