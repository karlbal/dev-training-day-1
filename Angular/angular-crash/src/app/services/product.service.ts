import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from '../mock-product';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = 'https://localhost:44306/product';

  constructor(private http: HttpClient) { }

    getProducts() : Observable<Product[]> {
      return this.http.get<Product[]>(`${this.baseUrl}`);
    }

    deleteProduct(product: Product) : Observable<Product>{
      return this.http.delete<Product>(`${this.baseUrl}/${product.productId}`);
    }

    addProduct(product: Product) : Observable<Product> {
      return this.http.post<Product>(this.baseUrl, product, httpOptions);
    }
}
