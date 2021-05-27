import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';


import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IgxIconModule, IgxNavbarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import {registerLocaleData} from '@angular/common';
import LocaleTr from '@angular/common/locales/tr';
import LocaleTrExtra from '@angular/common/locales/extra/tr';
import { UserService } from '../libs/services/user.service';
import { AuthInterceptor } from 'src/libs';


registerLocaleData(LocaleTr, 'tr-TR', LocaleTrExtra)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      easing: "ease-in",
      progressAnimation: "increasing",
      positionClass: "toast-bottom-right",
      preventDuplicates: true
    }),
    NgxSpinnerModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    HttpClientModule
  ],
  providers: [CookieService,UserService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
