import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highLightColor:string
  constructor(private el:ElementRef) {
    //el.nativeElement.style.backgroundColor = 'red';
   }
   @HostListener('mouseenter') onmouseenter(){
     this.el.nativeElement.style.backgroundColor = this.highLightColor;
   }
   @HostListener('mouseleave') onmouseleave(){
     this.el.nativeElement.style.backgroundColor = null;
   }

}

// HostListener - Binds a CSS event like mouseenter/mouseleave to a host listener and supplies configuration metadata.
//  Angular invokes the supplied handler method when the host element emits the specified event,
//   and updates the bound element with the result. If the handler method returns false,
//    applies preventDefault on the bound element.
