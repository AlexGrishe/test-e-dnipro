import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:8080'
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  // get(url: string) {
  //   return this.http.get(`${this.ROOT_URL}/${url}`);
  // }

  post(url: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${url}`, payload);
  }

  put(url: string, payload: Object) {
    return this.http.put(`${this.ROOT_URL}/${url}`, payload);
  }

  delete(url: string) {
    return this.http.delete(`${this.ROOT_URL}/${url}`);
  }
}
