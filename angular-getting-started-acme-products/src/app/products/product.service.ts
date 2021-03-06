import { Injectable } from '@angular/core';
import {IProduct} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

    getProducts():IProduct[]{
        return [
            {
                "productId": 2,
                "productName": "Garden Cart", 
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2019",
                "description": "155 gallon capacity rolling garden cart",  
                "starRating": 4.2,
                "price": 32.99,
                "imageUrl": "assets/images/garden_cart.png"
              },
              {
                "productId":2,
                "productName": "Hammer", 
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2019",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "assets/images/hammer.png"
              }
        ]
    }
}

