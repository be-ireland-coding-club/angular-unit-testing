import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimtext'
})
export class TrimtextPipe implements PipeTransform {
  transform(text:string, lenth:number): string {
    if(text.length<=lenth) return text
    else return `${text.substr(0,lenth)}...`
  }
}
