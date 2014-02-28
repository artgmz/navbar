"use strict";

// Navbar with log out button.
angular.module("sample.directives", []).directive("navbar", function() {
    return {
        replace: true, 
        templateUrl: "partials/directives/navbar.html", 
        scope: {
            logOut: "&"
        }
    };
});