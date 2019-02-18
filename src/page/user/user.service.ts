import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/shared/model/user';
import { Todo } from '../../shared/model/todo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public getUserList(): Observable<User[]> {
    const url = 'http://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(url);
  }

  public getUserListById(id: number): Observable<User[]> {
    const url = `http://jsonplaceholder.typicode.com/users?id=${id}`;
    return this.http.get<User[]>(url);
  }

  public getTodo(id: number): Observable<Todo[]> {
    const params = new HttpParams().set('userId', id.toString());
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Todo[]>(url, { params: params });
  }
}
