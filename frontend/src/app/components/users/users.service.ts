import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { Users } from './users.model';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = "https://servejsoneoc.herokuapp.com/users";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top", 
      panelClass: isError ? ['msg-erro'] : ['msg-success']
    })
  }

  read(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)) 
    );
  }

   
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

}
