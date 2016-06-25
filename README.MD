#WordPress Admin JavaScript Single Page Application Boilerplate
 My intention or this project is to be an easy starting point for anyone wanting to create a WordPress admin that is a JavaScript SPA.
 Right now this is a standalone __WordPress__ plugin.

##AngularJS
This repo is the AngularJS version of the boilerplate, check out the [organization](https://github.com/WordPress-Admin-JavaScript-Boilerplate) for other versions

##Installation
* Clone Repo into `wp-content/plugins`
* Run `npm install`
* Run `gulp`

##Starter Content
I have included a CPT of 'Book' to get created with 10 posts, to turn this off comment out lines 64-65 of `admin-js-app.php`

##CPT REST Support
Add support for your existing CPT's by adding the slug to `line 49` in `admin-js-app.php` [code](https://github.com/royboy789/WP-JS-SPA-ADMIN-BOILERPLATE/blob/master/admin-js-app.php#L41-L57)
Once added, your CPT will now automatically have REST support via `/wp-json/wp/v2/[cpt-slug]`

##Custom API Endpoints
In `includes/admin_custom_api.php` you will find the custom api endpoints I have created, I have kept it simple so you can modify or copy to create your own

##Custom API Fields
Since my example just uses a basic CPT, it is easier just to create custom rest fields for the post meta you want to get/save.
[api_field code](https://github.com/royboy789/WP-JS-SPA-ADMIN-BOILERPLATE/blob/master/includes/admin_custom_api.php#L104-L134)

Please add new api_fields (one per meta field if possible) as you need them. You will need to create both a function to return the meta on __GET__ and update on __POST__ requests.

##Routes & Templates
All html templates are located in `templates/`
Default routes include:
* `/` main page - __admin-js-app-main.html__
* `/books` listing page - __admin-js-app-list.html__
* `/book/:id` detail page - __admin-js-app-detail.html__
* `/book/:id/edit` edit page - __admin-js-app-edit.html__

