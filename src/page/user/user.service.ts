import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Data } from '@angular/router';

import { Todo } from '../../shared/model/todo'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private http: HttpClient) { }

  getTodo(id: number): Observable<Todo[]> {
    let params = new HttpParams().set('userId', id.toString());
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Todo[]>(url, { params: params });
  }
}
