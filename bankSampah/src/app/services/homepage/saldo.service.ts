import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class User {
  barang: number = 0;
  jumlah: number = 0;
}
export class Stor {
  tukar: number = 0;
  jumlah: number = 0;
}

@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  private baseUrl = 'http://localhost:8080/'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getHistory() {
    const url = `${this.baseUrl}/history`; 
    return this.http.get(url);
  }

  getSaldo() {
    const url = `${this.baseUrl}/saldo`; 
    return this.http.get(url);
  }

  tambah(user: User): Observable<any> {
    return this.http.post<User>(this.baseUrl + '/saldo/create', JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('Error occured'))
      );
  }
  
  createStor(user: Stor): Observable<any> {
    return this.http.post<Stor>(this.baseUrl + '/saldo/stor', JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError<Stor>('Error occured'))
      );
  }

  addItem(data: any) {
    return this.http.post(`${this.baseUrl}/saldo/additem`, data);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  } 
}
