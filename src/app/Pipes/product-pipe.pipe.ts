import { PostProductModel } from './../Shared/post-product-model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPipe'
})
export class ProductPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
