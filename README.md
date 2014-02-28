# Navbar

## Description:
This is a directive for a navbar, complete with a logo image and a log out button. The log out button should be implemented in a "master" app controller so as to be accessible by all navbar instances.

## Dependencies:
* AngularJS 1.0.4
* Bootstrap 2.3.0

## Notes:
* Angular has changed a lot since this directive was written, so its entirely possible that it doesn't work with newer versions.
* Requires creation of a partial at specified directory. You can change the directory to one more suitable to your app structure or use inline HTML, though extracting the partial to its own HTML file is recommended to maintain cleaner code.
* Sample partial relies on custom "tap" directive for mobile devices.