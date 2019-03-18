import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/internal/operators";
import { ReplaySubject } from "rxjs/index";
@Injectable({
  providedIn: "root"
})
export class MemesService {
  memes_url = "https://api.gfycat.com/v1/reactions/populated?tagName=";

  //track progress, and use appropriate for progress..if a low score user scores high, use a memes that encourages.e.g 'shocked' reaction

  impressions = {
    10: ["Frown", "Rofl", "Shocked", "Haha", "You Got This"],
    20: ["Seriously", "Rofl", "Shocked", "Haha", "You Got This"],
    30: ["lol", "Rofl", "Haha", "Hugs", "You Got This"],
    40: ["Sigh", "High Five", "Slow Clap", "Hugs", "You Got This"],
    50: ["High Five", "Good Job", "Slow Clap", "You Got This"],
    60: ["Good Job", "Celebrate", "High Five", "Slow Clap"],
    70: [, "Happy", "Great", "Celebrate", "Slow Clap"],
    80: ["Fist Bump", "Happy", "Great", "Happy Dance"],
    90: ["Good", "Happy", "Great", "Happy Dance"],
    100: ["Awesome", "Happy", "Great", "Happy Dance", "Nailed It", "Perfect"]
  };

  memes_next_page_cursor; //used to tell memes api service to send next memes image, this ensures we dont get same memes during a session

  constructor(public $http: HttpClient) {}

  $memesData = new ReplaySubject(1);

  getMemes(impression: string) {
    let url = this.memes_next_page_cursor
      ? this.memes_url + `${impression}&cursor=${this.memes_next_page_cursor}`
      : this.memes_url + impression;

    this.$http.get(url).subscribe(response => {
      //image not found
      this.memes_next_page_cursor = response.cursor;

      if (!response.cursor) {
        this.getMemes(impression);
        return;
      }

      this.memes_next_page_cursor = response.cursor;
      this.$memesData.next(response.gfycats[0].webpUrl);
    });
  }

  generateMemes(score_in_percent) {
    this.$memesData.next("/assets/images/spinner-icon.jpg");

    for (let [key, value] of Object.entries(this.impressions)) {
      if (key >= score_in_percent) {
        console.log({ key: value });
        let selected_impression =
          value[Math.floor(Math.random() * value.length)];

        this.getMemes(selected_impression.toLowerCase());

        return this.$memesData;
      }
    }
  }
}
