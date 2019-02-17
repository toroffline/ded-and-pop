import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/shared/model/user';

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
}
