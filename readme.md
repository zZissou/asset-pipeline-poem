# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Asset Pipeline Poem

**Objective:** Practice requiring CSS and JavaScript files in the Rails asset pipeline and precompiling assets.

**Terms:**

* Manifest
* Pre/compilation
* Concatenation
* Compression / Minification
* Browser Caching
* MD5 fingerprint

## Instructions

Your goal is to reconstruct a simple poem. To get started:

* Clone this repo.
  * Note that this Rails app doesn't have a database.
* Start your server, and navigate to `localhost:3000` in the browser. You should see a jumbled poem.

The poem should eventually look like this when you're done making changes:

![solution_screenshot](solution_screenshot.png)

#### Rules

* You are not allowed to modify any files *except* `app/assets/javascripts/application.js`, `app/assets/stylesheets/application.css`, and `config/environments/development.rb` (to configure asset precompilation).
* Try not to use `require_tree .` anywhere.

#### Using the Asset Pipeline

The assets you want to require live in the following locations, inside of your Rails application directory:

```
app/                   # application specific code
  assets/
    images/
    javascripts/
    stylesheets/
lib/                   # custom libraries
  assets/
    javascripts/
    stylesheets/
vendor/                # third party libraries
  assets/
    javascripts/
    stylesheets/
```

Each directory has a specific use case. The files you want are scattered across them. **Your goal is to find all the files and require them in the correct order!**

## Bonus

1. Note that the Bootstrap CSS and JavaScript libraries are included using a CDN. Practice requiring the files through the asset pipeline instead:

  * Find and copy the current `bootstrap.css` URL (see `views/layouts/application.html.erb`).
  * From the Terminal, run `curl -vs BOOTSTRAP_CSS_URL_YOU_COPIED > vendor/assets/stylesheets/bootstrap.min.css`
  * Finally, delete the CDN link from `application.html.erb`, and `require` the new Bootstrap CSS file in your `application.css` manifest.
  * Repeat these steps for the Bootstrap JavaScript library.
