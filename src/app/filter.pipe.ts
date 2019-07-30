import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string,column: string): any[] {
    if(!items) return [];
    if(searchText == '') return items;
    if(items && items.length<=1) return items;
    searchText = searchText.toLowerCase()
    if(column!='')
    return items.filter(item => item[column] && item[column].toLowerCase().includes(searchText))
    else
    return items.filter(item => item.toLowerCase().includes(searchText))
  }

}
