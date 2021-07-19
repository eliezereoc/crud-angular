import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './products.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
 
  //configura snackbar para ser injetado em um componente
  //é a mensagem que é apresentada no canto superior
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })    
  }

  //Realiza a inserção do produto e recebe de volta 
  //um observable do tipo produto, ou seja, o produto 
  //que acabei de inserir
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }


}
