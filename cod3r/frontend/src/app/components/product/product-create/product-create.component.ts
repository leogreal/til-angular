import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})
export class ProductCreateComponent {
  constructor(private productService: ProductService, private router: Router) {}

  create(): void {
    this.productService.showMessage('Produto criado!');
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
