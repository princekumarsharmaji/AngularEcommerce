import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-seller-add-products',
  templateUrl: './seller-add-products.component.html',
  styleUrls: ['./seller-add-products.component.css']
})
export class SellerAddProductsComponent implements OnInit {
  addMessage: string| undefined;
  constructor(private product: ProductService)  {}

  ngOnInit(): void {
  }

  addProducts(data:product){
   //console.log(data)
   this.product.addProduct(data).subscribe((result)=> { console.log(result)
   if(result){
     this.addMessage = "Product has been added successfully";
   }
   setTimeout(()=> (this.addMessage = undefined), 3000)
  
   })}}
