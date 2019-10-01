import { ProductModel } from './product-model';
import { Injectable, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }
  search(products: ProductModel[], text: string, pipe: PipeTransform): ProductModel[] {
    return products.filter(product => {
      const term = text.toLowerCase();
      return product.Name.toLowerCase().includes(term);
    });
  }
}
