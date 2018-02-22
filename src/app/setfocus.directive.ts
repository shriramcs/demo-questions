import { 
    Directive,
    AfterViewInit,
    ElementRef,
    HostListener,
    Renderer
} from '@angular/core';

@Directive({
  selector: '[setfocus]'
})
export class SetfocusDirective implements AfterViewInit{

    constructor(private el: ElementRef,
        private renderer: Renderer) {
    }

    @HostListener('click', ['$event.target'])
    onClick(targetElement) {
        let part = this.el.nativeElement.querySelector('.input input');
        this.el.nativeElement.classList.add('focus');
        this.el.nativeElement.classList.add('ready');
        part.focus();
    }

    @HostListener('focus', ['$event.target'])
    onFocus(targetElement) {
        let part = this.el.nativeElement.querySelector('.input input');
        this.el.nativeElement.classList.add('focus');
        this.el.nativeElement.classList.add('ready');
        part.focus();
    }

    @HostListener('focusout', ['$event.target'])
    onFocusOut(targetElement) {
        this.el.nativeElement.classList.remove('focus');
        this.el.nativeElement.classList.remove('ready');
    }
   
    ngAfterViewInit() {
    //   this.el.nativeElement.focus();
    }
    

}
