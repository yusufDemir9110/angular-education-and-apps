import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RoleService } from 'src/libs';
import {SubSink} from 'subsink';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit, OnDestroy {
  rolesData:any;
  subs1!:Subscription;
  private subs=new SubSink();
  constructor(private roleService:RoleService) { }


  ngOnDestroy(){
    this.subs1.unsubscribe();
  }

  ngOnInit(){
    this.getRoles();
  }

  getRoles(){
    this.subs1=this.roleService.getAllRoles().subscribe(data=>{
      this.rolesData=data;
    });
  }

  addRole(roleForm:any){
    this.roleService.addRole(roleForm.value).subscribe(data=>{
      this.getRoles();
    },error=>{
      alert("Something went wrong1")
    });
  }

  editRole(roleForm:any){
    this.roleService.editRole(roleForm.value).subscribe(data=>{
      this.getRoles();
    },error=>{
      alert("Something went wrong2")
    });
  }
  deleteRole(roleForm:any){
    this.roleService.deleteRole(roleForm.value).subscribe(data=>{
      this.getRoles();
    },error=>{
      alert("Something went wrong3")
    });
  }

}
