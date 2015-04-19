# ESBLighting

Provides the lighting schedule for the Empire State Building in NYC, NY via
- a responsive website
- an Android app
- an IFTTT recipe

## Backend Service

The backend service parses ESB's official website and builds a representation of the schedule.
The schedule is subsequently provided as 
- an Atom feed 
- a very simple REST/json API.

**Usage**

- calling the service directly will return the Atom feed as needed for IFFFT
- Parameter `o` defines the output format. Available choices: `json`
- Parameter `s` selects a subset of the schedule. Available choices: `today`, `(specific date)`, `upcoming`, `all`
- Parameter `sort` defines how the schedule will be sorted. Available choices: `asc`, `desc`

If there is no information available for a specific date or for today, white/white/white will be returned as the color.

## App and website

App and website are being published from a single source using the ionic framework (based on AngularJS) and Phonegap Build.
The website is available at http://esblighting.org.
The app can be downloaded at https://play.google.com/store/apps/details?id=net.fizfaz.esblighting.
The IFTTT recipe is available at https://ifttt.com/recipes/149276-if-the-empire-state-building-is-coming-up-with-an-interesting-color-combination-email-me.