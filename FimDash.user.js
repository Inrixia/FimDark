// ==UserScript==
// @name         Fim Dash
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Time to take over FimFiction
// @author       YourTrueOverlord
// @match        http://tampermonkey.net/index.php?version=4.4&ext=dhdg&updated=true
// @grant        none
// @run-at document-start
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @include http://www.fimfiction.net/*
// @include https://www.fimfiction.net/*
// ==/UserScript==


(function() {
    $("head").append('<link id="first_dark" rel="stylesheet" href="https://inrixia.github.io/darkmode.css" type="text/css">');
    window.onload = function(){
        $("head").append('<link rel="stylesheet" href="https://inrixia.github.io/darkmode.css" type="text/css">');
        $("#first_dark").remove();
    };
})();
