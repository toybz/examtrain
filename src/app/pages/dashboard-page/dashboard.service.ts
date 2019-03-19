import { Injectable } from "@angular/core";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(private localStorage: LocalStorageService) {}

  getDashboardData() {
    return this.localStorage.getCompletedQuiz();
  }
}
