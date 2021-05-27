import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit {


  name:string="";
  localStorageVal:any="";
  localStorageObjVal:any;

  objName:string="";
  objSurname:string="";
  objAge:string="";
  constructor() { }

  ngOnInit(): void {
  }

  setItem(value: string){
    localStorage.setItem("name",value)
  }

  getItem(){
    this.localStorageVal=localStorage.getItem("name");
  }

  clearItem(){
    localStorage.removeItem("name");
  }

  clearAll(){
    localStorage.clear();
  }

  setObject(){
    const obj={name:this.objName, surName:this.objSurname, age:this.objAge};
    localStorage.setItem("object",JSON.stringify(obj));
  }

  getObject(){
    this.localStorageObjVal=localStorage.getItem("object");
  }
}
