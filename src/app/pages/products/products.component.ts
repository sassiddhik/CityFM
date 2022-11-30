import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { productElement } from 'src/app/Modal/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  ProductsList: productElement[] | undefined;
  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: productElement[]) => {
      //console.log(data);
      data.forEach((obj) => {
        obj.unitPrice = ((obj.unitPrice * 20) / 100)+obj.unitPrice;
      });
      this.ProductsList = data;
      //console.log(this.ProductsList);
    });
  }
}
