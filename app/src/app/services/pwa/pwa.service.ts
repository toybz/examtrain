import {ApplicationRef, Injectable} from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import {interval, ReplaySubject} from "rxjs";
import {first} from "rxjs/operators";
import Swal from 'sweetalert2'
@Injectable({
  providedIn: "root"
})
export class PwaService {
  promptEvent: any;
  promptStream = new ReplaySubject(1);

  constructor(private  appRef: ApplicationRef,private swUpdate: SwUpdate) {

      const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    //  const everySixHours$ = interval(6 * 60 * 60 * 1000);
   //   const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

      appIsStable$.subscribe(() => swUpdate.checkForUpdate());


    swUpdate.available.subscribe(event => {

        swUpdate.activateUpdate().then(()=>{

            Swal.fire({
                title: 'Notice',
                text: "App has been updated, will you like to refresh page to get the current version",
                type: 'info',
                showCancelButton: true,
                confirmButtonColor: '#0b9c30',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Reload'
            }).then((result) => {
                console.log('sw' , result)
                if (result.value) {

      document.location.reload();
                }
            })




        })








    });

    window.addEventListener("beforeinstallprompt", (event: any) => {
      this.promptEvent = event;
      this.promptStream.next(event);
    });
  }

  installPwa(): void {
    // console.log(this.promptEvent);
    this.promptEvent.prompt();
  }




}
