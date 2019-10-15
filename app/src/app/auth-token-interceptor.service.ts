import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "./services/local-storage/local-storage.service";
import {LocalStorage} from "@ngx-pwa/local-storage";

@Injectable({
  providedIn: 'root'
})
export class AuthTokenInterceptorService  implements HttpInterceptor {



    constructor(private localStorage: LocalStorage) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


         this.localStorage.getItem('user').subscribe((u:any)=>{
             const user:any = u
            console.log(user)

            if (typeof user.token === "undefined" ){
                return next.handle(req);
            }

            const token = user.token
            console.log(token)

            req = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`
                },
            });
            console.log('new url clone' , req)

            return next.handle(req);
        })
    }
}