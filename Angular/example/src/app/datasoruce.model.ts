import { Product } from "./product.model";

export class SimpleDataSource{
    private products!:Product[];

    constructor(){
        this.products=new Array<Product>(
            new Product(1, "Samsung S5","iyi tel","1.jpg",1000),
            new Product(2, "Samsung S6","iyi tel","2.jpg",1000),
            new Product(3, "Samsung S7","iyi tel","3.jpg",1000),
            new Product(4, "Samsung S8","iyi tel","4.jpg",1000)
        );
    }
    
    getProducts():Product[]{
        return this.products;   //private fieldları encapsule eden formul
    }
}