import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Output() resetForm:EventEmitter<any> = new EventEmitter();
  @Input() data!:any;

  constructor() { }

  ngOnInit(): void {
  }
  emitForm(event: any){
    this.resetForm.emit(event)
  }
  alertSth(){
    alert("you have reached the child component");
    this.data={
      name:"triggered",
      status:false
    }
  }
}
