import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AhmetAydin';
 
  
  constructor(private toastr:ToastrService, private spinner:NgxSpinnerService){ }
  
  showSuccess(){
    this.toastr.success("Ürününüz sepete ekleniyor","Sepete Ekleniyor");
  }

  ngOnInit(){
    this.showSuccess();
    this.showSpinner();
  }
  
  showSpinner(){
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },5000);
  }
  
  
}
