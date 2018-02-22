import { 
    Directive,
    AfterViewInit,
    ElementRef,
    HostListener,
    Renderer,
    ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[setfocusinput]'
})
export class SetfocusinputDirective implements AfterViewInit{

    constructor(private el: ElementRef,
        private renderer: Renderer,
        private view: ViewContainerRef) {
    }

    @HostListener('click', ['$event.target'])
    onClick(targetElement) {
        // let part = this.el.nativeElement.querySelector('.input input');
        // this.el.nativeElement.classList.add('focus');
        // this.el.nativeElement.classList.add('ready');
        // part.focus();
    }

    @HostListener('focus', ['$event.target'])
    onFocus(targetElement) {
        let part = this.el.nativeElement.closest('li');
        part.classList.add('focus');
        part.classList.add('ready');
        part.focus();
    }

    @HostListener('focusout', ['$event.target'])
    onFocusOut(targetElement) {
        let part = this.el.nativeElement.closest('li');
        part.classList.remove('focus');
        part.classList.remove('ready');
    }
   
    ngAfterViewInit() {
    //   this.el.nativeElement.focus();
    }
    

}
