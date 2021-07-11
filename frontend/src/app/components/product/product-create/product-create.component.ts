import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../products.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  //metodo criar produto
  createProduct(): void {
    //Passa o produto para ser criado e quando tiver a resposta 
    //de subscribe apresenta mensagem de navaga para a pagina de produtos
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!');//apresenta mensagem no topo da pagina
      this.router.navigate(['/products']);//navega para produto 
    });
    
  }

  cancel(): void {
    this.router.navigate(['/products']);//navega para produto 
  }

}
