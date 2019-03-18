import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class UtilsService {
  constructor(public toastController: ToastController) {}

  // use to check if object is empty {}

  isEmptyObject(obj) {
    return obj && Object.keys(obj).length === 0;
  }

  async showToast(message: string, duration: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration
    });
    toast.present();
  }
}
