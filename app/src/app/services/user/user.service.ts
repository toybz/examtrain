import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {LocalStorageService} from '../local-storage/local-storage.service';
import * as url from '../urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    user = new  BehaviorSubject({});

    constructor(private http: HttpClient, private localStorage: LocalStorageService) {
      const storedUser = this.localStorage.getUser();
      storedUser.subscribe((user: any) => {

     // user.signed_in = true //for testing purpose
    // set all user as subscribed so they can access all features
        //  user.signed_in = true;
        // user.subscription.status = true;

     console.log({user});

          this.user.next(user);

      } );




  }

  registerUser(user) {

      return  this.http.post(url.register , {user} );

  }
    loginUser(user) {

        return  this.http.post(url.login, {user} );

    }

    logOut() {

        this.localStorage.saveUser({
            signed_in: false
        });
        this.localStorage.saveOtherData({
            signed_in: false
        });

     //   return  this.http.post(url.logout,{user:{}} )
    }

    getUser() {

        return this.user;
    }



}
