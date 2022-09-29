import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
    showLogin = false;
    authError: string= '';
  constructor( private seller: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data:signUp):void{
   this.seller.userSignUp(data)
};
logUp(data:signUp):void{
 this.seller.userlogin(data)
 this.seller.isLoginError.subscribe((error)=>{
   if(error){
     this.authError = "Email or Password is incorrect"
   }
 })
 
};
 

openLogin(){
this.showLogin = true
}
openSignup(){
  this.showLogin = false
  }
}
