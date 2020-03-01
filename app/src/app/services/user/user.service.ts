import { Injectable } from '@angular/core';
import * as url from "../urls";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "../local-storage/local-storage.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

    user = new  BehaviorSubject({})

    constructor(private http: HttpClient, private localStorage: LocalStorageService) {
      const storedUser = this.localStorage.getUser()
      storedUser.subscribe((user: any) => {

    //   user.signed_in = true //for testing purpose
     console.log(user)

          this.user.next(user)

      } )




  }

  registerUser(user){

      return  this.http.post(url.register ,{user:user} )

  }
    loginUser(user){

        return  this.http.post(url.login,{user:user} )

    }

    logOut(){

        this.localStorage.saveUser({
            signed_in: false
        })
        this.localStorage.saveOtherData({
            signed_in: false
        });

     //   return  this.http.post(url.logout,{user:{}} )
    }

    getUser(){
        return this.user;
    }



}
