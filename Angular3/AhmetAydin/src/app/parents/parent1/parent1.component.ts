import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from 'src/libs';


@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  @ViewChild(Child1Component) child1!:Child1Component;
  name:string="";
  successStatus:any=0;
  calculateData:any;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    this.calculateData={
      name:this.name,
      status:this.successStatus
    }
  }

  resetParentForm(){
      this.name="";
      this.successStatus=0;
    
  }

  
}
