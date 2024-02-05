import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatLink',
})
export class FormatLinkPipe implements PipeTransform {
  transform(value: string): string {
    return value.split(':')[1].split('_').join(' ');
  }
}
