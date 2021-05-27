import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  name:string="";
  username:string="";
  title:boolean=false;
  cities:any=[
    {id:1, name:"İstanbul", region:"Marmara"},
    {id:3, name:"İzmir", region:"Ege"},
    {id:2, name:"Samsun", region:"Karadeniz"},
    {id:4, name:"Antalya", region:"Akdeniz"}
  ]

  color:string="";

  constructor() { }

  ngOnInit(): void {
  }
  changeTitle(){
    this.title=!this.title;
  }
}
