import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'sortBy'
})
export class SortByPipePipe implements PipeTransform {

  transform(value: any[], column:string,order=''): any[] {
    if(!value || !column || column === '' || order ==='') return value;
    if(value && value.length<=1) return value;
    return _.orderBy(value,[column],[order]); //orderBy is lodash utility function used for sorting
  }
}
