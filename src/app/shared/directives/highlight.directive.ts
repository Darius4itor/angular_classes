import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

  defaultColor: string = '#fff6c4';
  highlightColor: string = '#fff6f6';

  private currentColor: string = this.defaultColor;

  @HostBinding('style.backgroundColor') get getBackgroundColor() {
    return this.currentColor;
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  @HostListener('mouseenter') onMouseOver() {
    this.currentColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseOut() {
    this.currentColor = this.defaultColor;
  }
}
