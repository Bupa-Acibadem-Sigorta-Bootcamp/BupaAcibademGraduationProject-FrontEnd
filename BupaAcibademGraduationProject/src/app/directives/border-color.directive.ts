import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective {
  constructor(private item: ElementRef) {}

  @HostListener('mouseenter') onmouseenter() {
    this.item.nativeElement.style.borderColor = 'red';
  }

  @HostListener('mouseleave') onmouseleave() {
    this.item.nativeElement.style.borderColor = 'white';
  }
}
