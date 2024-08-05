import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]'
})
export class EmailValidatorDirective {
  constructor(private renderer: Renderer2,
              private control: NgControl,
              private el: ElementRef) {
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    this.checkValidity();
  }

  @HostListener('blur')
  onBlur(): void {
    this.checkValidity();
  }

  private checkValidity(): void {
    const control = this.control.control;
    if (control && control.invalid && (control.dirty || control.touched)) {
      this.renderer.addClass(this.el.nativeElement, 'profile-details-input-invalid');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'profile-details-input-invalid');
    }
  }
}
