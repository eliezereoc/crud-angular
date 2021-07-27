import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../products.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }
  
  constructor(
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  //Imprime o produto que esta sendo editado
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });
  }

  //Salva produto alterado 
  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);//volta para lista
    })    
  }

  //Cancela Update, volta para tela de produtos
  cancel(): void {
    this.router.navigate(['/products']);
  }

  

}
