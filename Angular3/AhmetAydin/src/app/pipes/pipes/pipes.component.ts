import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  today!: string;
  title:string="aNKara TüRkiye";
  turkishUppercaseVal!:string;
  cashVal:number=1412.34;
  objectVal:Object={
    foo:"bar",
    baz:"qux",
    nested:{xyz:3,numbers:[1,2,3,4,5]}
  };
  percentVal:number=1234.54;
  cityName:string="istanbul";
  cash:number=1500;

  cities=[
    "istanbul","ankara","izmir","mersin"
  ]

  constructor() { }

  ngOnInit(): void {
    this.today=new Date().toDateString();
    this.turkishUppercaseVal=this.title.toLocaleUpperCase("tr-TR")
  }

}
