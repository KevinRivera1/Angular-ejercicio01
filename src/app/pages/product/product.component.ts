import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductModel } from 'src/app/Modules/product.modul';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    //this.updateProduct();
    //this.deleteProduct();
    //this.createProduct()
  }

  getProducts() {
    const url = 'http://api.escuelajs.co/api/v1/products';
    this.httpClient.get(url).subscribe(response => { console.log(response); });
  }

  getProduct() {
    const url = 'http://api.escuelajs.co/api/v1/products/8';
    this.httpClient.get(url).subscribe((response) => { console.log(response); });
  }

  
  createProduct() {
    const data = {
      title: 'Escuela JS',
      price: 100,
      description: 'Escuela de JavaScript',
      category: 2,
      images: ['https://escuelajs.co/static/images/logo.png', 'https://escuelajs.co/static/images/logo.png']
    };
    const url = 'http://api.escuelajs.co/api/v1/products/12';
    this.httpClient.post(url, data).subscribe((response) => {
      console.log(response);
    });
  }

  updateProduct() {
    const data = {
      title: 'Escuela JS Kevin Rivera',
      price: 100,
      description: 'Kevin Rivera',
      category: 2,
      images: ['https://escuelajs.co/static/images/logo.png']
    };
    const url = 'http://api.escuelajs.co/api/v1/products/2';
    this.httpClient.put(url, data).subscribe((response) => {
      console.log(response);
    });
  }

  deleteProduct() {
    const url = 'http://api.escuelajs.co/api/v1/products/6';
    this.httpClient.delete(url).subscribe((response) => {
      console.log(response);
    });
  }


}
