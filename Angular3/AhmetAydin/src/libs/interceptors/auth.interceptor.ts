import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url==='https://udemy-nestjs-course.herokuapp.com/api/login'){
      return next.handle(request)
    }else{
       request=request.clone({setHeaders:{Authorization:`Bearer ${this.userService.getToken()}`}});
    return next.handle(request);
    }
  }
}
