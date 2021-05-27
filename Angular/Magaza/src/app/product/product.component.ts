import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {AlertService} from '../services/alert.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  //providers:[AlertService]   lokal servis için bu şekilde kullanılır
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(
    private alertService:AlertService, 
    private productService:ProductService,
    private activatedRoute:ActivatedRoute  
    ) { }
  title="Ürün Listesi";
  filterText="";
  products! :Product[];
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
       this.productService.getProducts(params["categoryId"]).subscribe(data=>{
      this.products=data;
    })
    })
   
  }
  addToCart(product: { name: string; }){
    this.alertService.success(product.name + " added");
  }

}

