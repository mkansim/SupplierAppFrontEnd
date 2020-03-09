import { Injectable, Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Supplier} from 'src/app/models/supplier-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private client: HttpClient) { }

  readonly ApiUrl = 'http://localhost:56111/api/supplier';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'text/html'})
  }

  getSupplier(name:string) : Observable<Supplier> {
    var data = this.client.get<Supplier>(this.ApiUrl + '/GetByName?name=' + name);
    return data;
  }

  addSupplier(postData:any){
    return this.client.post(this.ApiUrl, postData);
  }
}
