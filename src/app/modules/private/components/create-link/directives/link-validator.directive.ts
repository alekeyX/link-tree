import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appLinkValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LinkValidatorDirective,
      multi: true
    }
  ]
})
export class LinkValidatorDirective implements Validator {

  linksList: string[] = [
    'https://www.youtube.com/',
    'https://www.linkedin.com/',
    'https://www.github.com/',
    'https://www.facebook.com/'
  ];

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value && !this.linksList.some((url: string) => value.startsWith(url))) {
      return {linkError: 'Please check the URL'};
    }

    return null;
  }

}
