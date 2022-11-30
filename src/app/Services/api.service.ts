import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { productElement } from '../Modal/products';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  apikey = environment.apikey;

  getProducts() {
    let options = {
      headers: {
        'Content-Type': ['application/json'],
        'Access-Control-Allow-Origin': '*',
        'api-key': this.apikey,
      },
    };
    return this.httpClient.get<productElement[]>('/api/Products', options);
  }
}
