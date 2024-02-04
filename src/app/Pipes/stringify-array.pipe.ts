import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringifyArray',
  standalone: true,
})
export class StringifyArrayPipe implements PipeTransform {
  transform(value: string[], ...args: unknown[]): string {
    return value.join(' , ') + '...';
  }
}
