import { Component, Input, Output, EventEmitter} from "@angular/core";
@Component(
    {
        selector: "Employe-Count",
        templateUrl: "app/EmployeeCount.html"
    })
export class EmployeeCount {
    SelectedRadioButtonValue: string = "All";

    @Output()
    countRadiobuttonselectionchange: EventEmitter<string> = new EventEmitter<string>();
    @Input()
    all: number ;
    @Input()

    male: number;
    @Input()

    feMale: number;

    onslectionchange()
    {
        this.countRadiobuttonselectionchange.emit(this.SelectedRadioButtonValue);
        console.log(this.SelectedRadioButtonValue);
    }
}