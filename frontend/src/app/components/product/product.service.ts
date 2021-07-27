import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { Product } from './products.model';
import { map, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  //configura snackbar para ser injetado em um componente
  //é a mensagem que é apresentada no canto superior
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top", 
      panelClass: isError ? ['msg-erro'] : ['msg-success']
    })
  }

  //Realiza a inserção do produto e recebe de volta 
  //um observable do tipo produto, ou seja, o produto 
  //que acabei de inserir
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))//retorna erro 
    );
  }

  //Realiza requisção para a url e recebe de volta 
  //um array de dados.
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))//retorna erro 
    );
  }

  //Metodo que realiza requisição passando 
  //somento o ID e recebe somente o ID desejado
  readById(id: string | null): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))//retorna erro 
    );
  }

  //Metoro que realiza altualização de produto.
  //Recebe o produto atualizado do front-end
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))//retorna erro 
    );
  }

  //recebe o id e passa um delet para url
  delete(id: number | undefined): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))//retorna erro 
    );
  }

  //retorna mesagem de erro 
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }


}
