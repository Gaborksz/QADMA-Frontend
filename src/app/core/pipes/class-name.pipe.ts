import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'className',
  standalone: true
})
export class ClassNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/^[_\s]+|[_\s]+$/g, '');
  }
}
