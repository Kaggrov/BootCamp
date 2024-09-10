import { FormControl } from "@angular/forms";

export function forbiddenNameValidator(nameRe: RegExp) {
    return (control: FormControl): { [key: string]: any } | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
  }
  