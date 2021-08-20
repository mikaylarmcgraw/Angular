import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ProductService} from './product.service'

@Component({
  selector: 'pm-products',
  styleUrls: ['./product-list.component.css'],
  templateUrl:'./product-list.component.html'

})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number =2;
  showImage: boolean = false;
  _listFilter: string;
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteresProducts= this.listFilter? this.performFilter(this.listFilter):this.products;
  }
  filteresProducts: IProduct[];
  products: IProduct[] = [
  ];

  constructor(private productService: ProductService){ 
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List: ' + message;
  }

performFilter(filterBy: string):IProduct[]{
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product:IProduct)=>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
}

  toggleImage(): void{
    this.showImage =!this.showImage;

  }

  ngOnInit():void{
    this.products = this.productService.getProducts();
    this.filteresProducts = this.products;
  }
}
