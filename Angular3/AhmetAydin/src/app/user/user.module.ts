import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRoleComponent } from './user/user-role/user-role.component';
import { RouterModule, Routes } from '@angular/router';
import { IgxButtonModule } from 'igniteui-angular';
import { AuthChildGuard } from 'src/libs/guards/auth-child.guard';


const routes:Routes=[
  {path:"",component:UserListComponent},
  {path:":id",component:UserComponent, children:[
    {path:"details", component:UserDetailComponent},
    {path:"role", component:UserRoleComponent}
  ],
  canActivateChild:[AuthChildGuard]
}
];

@NgModule({
  declarations: [UserListComponent, UserComponent, UserDetailComponent, UserRoleComponent],
  imports: [
    CommonModule,IgxButtonModule, RouterModule.forChild(routes)
  ]
})
export class UserModule { }
