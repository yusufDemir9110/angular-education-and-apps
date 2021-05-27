import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor!:string;

  constructor(private el:ElementRef) {
     
  }

  @HostListener("mouseenter") onMouseEnter(){
    this.el.nativeElement.style.backgroundColor=this.highlightColor;
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.el.nativeElement.style.backgroundColor=this.highlightColor;
  }



  /*@HostListener("mouseenter") onMouseEnter(){
    this.highlight("orange")
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.highlight("red")
  }

  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }
  */
  

  /*@HostListener("mouseenter") onMouseEnter(){
    this.makeInvisible();
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.makeVisible();
  }*/

  makeVisible(){
    this.el.nativeElement.style="visibility:visible";
  }
  makeInvisible(){
    this.el.nativeElement.style="visibility:hidden";
  }

}
function input() {
  throw new Error('Function not implemented.');
}

