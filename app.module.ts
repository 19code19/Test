
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';




import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee.component';
import { EmployeeListComponent } from './EmployeeLIst.component';
import { GenderTitlePipe } from './angular';
import { EmployeeCount } from './EmployeeCount.component';
import { Homecomponent } from './Home/Home.component';
import { PageNotFound } from './Error/PageNotFound';



const AppRoutes: Routes = [
    { path: 'Home', component: Homecomponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: '**', component: PageNotFound },

];
//, RouterModule.forRoot(AppRoutes)
//,Homecomponent,PageNotFound


@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule, RouterModule.forRoot(AppRoutes)],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, GenderTitlePipe, EmployeeCount, Homecomponent, PageNotFound],
  bootstrap:    [AppComponent ]
})
export class AppModule { }
