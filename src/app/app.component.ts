import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
//    template: `<div>
//    <h1>{{name}}</h1>
//    <My-Employe ></My-Employe> 

//</div>`
    templateUrl:'app/Appcomponet.html'
})
export class AppComponent  {
    name = 'Employee Details';
    isdisabled: boolean = false;
    show: boolean = false;
    GetFullName(): void
    {
        this.show = !this.show; 
    }

}
