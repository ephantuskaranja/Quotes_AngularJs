import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elem:ElementRef){ }
  @HostListener("click") onClicks(){
    this.background("yellow")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.background("None")
  }
  
  private background(action:string){
    this.elem.nativeElement.style.background=action;

  }
}