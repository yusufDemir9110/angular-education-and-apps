import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  user:any={ name: "Yusuf", surname: "demir", job: "software developer", favourite_place: "atmeydanı", isEditable: false }

  type="text";

  constructor() { }

  ngOnInit(): void {
  }
  buttonClicked(){
    alert("clicked")
  }

  inputSubmit(value:any){
    alert(value.target.value +"geldi");
  }
}
