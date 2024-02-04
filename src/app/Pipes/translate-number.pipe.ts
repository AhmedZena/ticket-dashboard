import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateNumber',
  standalone: true,
})
export class TranslateNumberPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    switch (value) {
      case 1:
        return 'مرة واحدة';
      case 2:
        return 'مرتان';
      default:
        return `${value} مرات`;
    }
  }
}
