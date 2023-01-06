import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { first } from 'rxjs/operators';
import { Users } from '../products/model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API = "/api/users";

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Users[]>(this.API)
      .pipe(
        first(),
        //delay(1000)
      );
  }

  loadByID(id: string) {
    return this.httpClient.get<Users>(`${this.API}/${id}`).pipe(first());
  }

  create(users: string) {
    return this.httpClient.post(this.API, users).pipe(first());
  }

  update(users: any) {
    return this.httpClient.put(`${this.API}/${users.id}`, users).pipe(first());
  }

  save(users: any) {
    if(users.id) {
      return this.update(users);
    }
    return this.create(users);
  }

  remove(id: any) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  getUserData(name:string, password:string) {
    return this.httpClient.get('/api/users');
  }
}
