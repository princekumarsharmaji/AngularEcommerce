import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { SellerAddProductsComponent } from './seller-add-products/seller-add-products.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'seller-auth', component: SellerAuthComponent},
  {path:'seller-home', component: SellerHomeComponent, canActivate: [AuthGuard]},
  {path: 'seller-add-product', component: SellerAddProductsComponent, canActivate: [AuthGuard]},
  {path: 'seller-update-product/:id', component: SellerUpdateProductComponent, canActivate: [AuthGuard]},
  {path: '**', component: NoPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
