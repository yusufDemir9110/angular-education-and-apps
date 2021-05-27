import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { IgxButtonModule } from 'igniteui-angular';

const routes:Routes=[
  {path:"",component:HomeComponent}
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, IgxButtonModule, RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
