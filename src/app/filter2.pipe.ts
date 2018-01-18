import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(kegs: any, term: any): any {
    if (term === undefined) return kegs;
    return kegs.filter(function(keg) {
      return keg.brewer.toLowerCase().includes(term.toLowerCase());
    })
  }

}
