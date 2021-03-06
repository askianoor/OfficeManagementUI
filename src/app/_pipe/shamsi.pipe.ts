import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'shamsi'
})
export class ShamsiPipe implements PipeTransform {
    transform(value: any, args?: any): any {
      const MomentDate = moment(new Date(value));
      return MomentDate.locale('fa').format('HH:mm:ss YYYY/M/D');
    }
}
