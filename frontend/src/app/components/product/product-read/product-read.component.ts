import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  //Metodo que recebe a lista de produto de ProductService
  //injetado no construtor e passa para o objeto products
  // a fim de ser apresentado no formulario
  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products);      
    })
  }

}
