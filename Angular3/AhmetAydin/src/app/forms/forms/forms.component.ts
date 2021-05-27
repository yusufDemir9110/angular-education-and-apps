import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlackListValidator, UserNameExistValidator, UserService, WhiteSpaceValidator } from 'src/libs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  registerForm!:FormGroup;
  user={
    userName:"yusuf",
    age:30
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  save(event:any){
    this.user=event.value;
    console.log("user saved", this.user)
  }

  randomUsername(event:any){
    this.registerForm.patchValue({
      userName:"test-123",
      age:12
    });
  }

  resetForm(){
    this.registerForm=new FormGroup({
      userName:new FormControl(this.user?this.user.userName:"",{
        validators:[
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          BlackListValidator('ğ'),
          WhiteSpaceValidator
        ],
        //asyncValidators:[UserNameExistValidator(this.userService)],
        updateOn:"blur"
      }),
      age:new FormControl(this.user?this.user.age:0)
    });
  }

}
