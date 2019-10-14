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
        const user = localStorage.getItem('user');
        const token = JSON.parse(user).token;
        req = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            },
        });
        console.log('new url clone' , req)

        return next.handle(req);
    }
}