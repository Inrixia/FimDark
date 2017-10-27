// ==UserScript==
// @name         Fim Dash
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Time to take over FimFiction
// @author       YourTrueOverlord
// @match        http://tampermonkey.net/index.php?version=4.4&ext=dhdg&updated=true
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @run-at document-body
// ==/UserScript==


(function() {
    $("head").append('<link rel="stylesheet" href="https://inrixia.github.io/darkmode.css" type="text/css">');
})();