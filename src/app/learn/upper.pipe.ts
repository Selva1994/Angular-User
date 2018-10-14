import { PipeTransform, Pipe } from "../../../node_modules/@angular/core";

@Pipe({
    name:"upper"
})
export class UpperPipe implements PipeTransform {
    transform(val: string): string {
        return val.toUpperCase();
    }
}