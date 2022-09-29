import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
productList: undefined|product[];
deleteMessage : undefined|string;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.productNewList()
   // this.product.productList().subscribe((result)=>{console.log(result)
   // this.productList = result;
    //})
  }
  delete(id:number){
      console.log(id)
    return this.product.deleteList(id).subscribe((result:any)=> {
      if(result){
        this.deleteMessage = "Product has been deleted"
      }
      this.productNewList()
    })
     
}
 productNewList(){
  this.product.productList().subscribe((result)=>{console.log(result)
    this.productList = result;
    })
}

}
