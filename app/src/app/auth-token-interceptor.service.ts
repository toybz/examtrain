import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "./services/local-storage/local-storage.service";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {forEach} from "@angular-devkit/schematics";
import {Network} from "@ngx-pwa/offline";

@Injectable({
  providedIn: 'root'
})
export class AuthTokenInterceptorService  implements HttpInterceptor {


    exclude_url = [
        'https://api.gfycat.com'

    ];

    constructor(private localStorage: LocalStorageService ) {}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


let skip = false
        this.exclude_url.forEach((url)=>{
            //console.log('checking' + url)
            if(req.url.indexOf(url) !== -1){
                console.log('skipping' + url)
               skip = true
            }
        })
        if(skip){
            return next.handle(req);
        }

        console.log('intercept still running')







       const user_details: any = this.localStorage.getUser().getValue()

        if (typeof user_details.token === "undefined" ){
            console.log('new url clone' , req)
            return next.handle(req);
        }

        const token = user_details.token

        req = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            },
        });
        console.log('new url clone' , req)

        return next.handle(req);




    }
}