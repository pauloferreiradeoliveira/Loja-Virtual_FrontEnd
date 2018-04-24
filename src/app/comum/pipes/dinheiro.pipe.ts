import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dinheiro'
})
export class DinheiroPipe implements PipeTransform {

  transform(value: any, args?: any): string {
   const money = new Intl.NumberFormat('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);

   return `R$ ${money}`;
  }

}
