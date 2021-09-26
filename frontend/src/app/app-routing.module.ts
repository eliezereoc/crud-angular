import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserDeleteComponent } from './components/users/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { UsersCrudComponent } from './views/users-crud/users-crud.component';

// import {  } from "";

//Realizado import RouterModule
//Implementado rotas
const routes: Routes = [
  {path: "",component: HomeComponent},
  {path: "products", component: ProductCrudComponent},
  {path: "products/create", component: ProductCreateComponent},
  {path: "products/update/:id", component: ProductUpdateComponent},
  {path: "products/delete/:id", component: ProductDeleteComponent},

  {path: "users", component: UsersCrudComponent},
  {path: "users/create", component: UserCreateComponent},
  {path: "users/update/:id", component: UserUpdateComponent},
  {path: "users/delete/:id", component: UserDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
