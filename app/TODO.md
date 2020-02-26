** Validate that all fields are selected in Quiz landing page before they can proceed



Add sub info card to neccessary pages
 - Quiz landing page
 - In View Answers modal
 - In view video Tutorials page
 - 

Add demo quiz counter to ensure a demo   user cant play more than set times a day.

In Quiz page check count, before playing to ensure user has not reached maxed allowed count.

Enable/disable features based on user sub status






Show the demo Quiz played count on quiz landing page

** Subscription payment method
   ** ATM Card - Flutter, Paystack etc
   ** Bank Transfer, then verify
   ** Bank Payment then verify
   ** Fix max question bug


Android app strategy

App is a webview that stream the page for the web
The web app uses service worker to cache all the res for fast load time. = Done
On update app notifies user and updates = Done
