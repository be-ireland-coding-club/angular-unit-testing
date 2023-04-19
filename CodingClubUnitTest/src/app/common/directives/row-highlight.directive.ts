import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRowHighlight]'
})
export class RowHighlightDirective {

  constructor(private elementRef:ElementRef) { }
  @HostListener('mouseover') mouseover(EventData:Event)
  {
    this.elementRef.nativeElement.style.backgroundColor='red';
  }
  @HostListener('mouseleave') mouseleave(EventData:Event)
  {
    this.elementRef.nativeElement.style.backgroundColor="transparent";  
  }

}
