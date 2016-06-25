# Live Notification for __WPCampus__
This is built for my __WPCampus__ workshop. This notification system allows you to quickly turn on a notification banner for your wbesite. If turned on or updated all users will get a live feedback.

# You will need create a Firebase.com account
Create account on www.firebase.com, a free account should work to get started 
 
# Installation
* Clone plugin into `wp-content/plugins` directory
* run `npm install`
* modify the `notification.firebase_url` to match the Firebase URL
* run `gulp` to create the build files

# Using the Plugin
To use activate the plugin, and you will see a new menu item `Live Notification`

# Debugging
When you click `Update Notification` your firebase should also update, keep it open and see if it updates as you update the settings

# Styling
All styling is done with sass files in the `assets/scss` directory.  
`notify-fed.scss` - manages the front end css  
`notify-admin.scss` - manages the admin css