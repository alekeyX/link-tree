import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appEmptyValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmptyValidatorDirective,
      multi: true
    }
  ]
})
export class EmptyValidatorDirective implements Validator {
  private readonly _EMPTY: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
      return {emptyError: `Can't be empty`};
    }

    return null;
  }
}
