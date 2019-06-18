export interface Iemployee
{
    Name: string;
    Age: number;
    Gender: string;
}
export class Employee implements Iemployee
{
    constructor(public Name: string, public Age: number, public Gender: string)
    {

    }
}