// ==UserScript==
// @name         Fim Dash
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Time to take over FimFiction
// @author       YourTrueOverlord
// @match        http://tampermonkey.net/index.php?version=4.4&ext=dhdg&updated=true
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @run-at document-body
// @include http://fimfiction.net/*
// @include https://fimfiction.net/*
// ==/UserScript==


(function() {
    $("head").append('<link rel="stylesheet" href="https://inrixia.github.io/darkmode.css" type="text/css">');

    // Only center on the homepage. Everything else left aligns
    //if (window.location.pathname != '/'){
    //    $('.user_toolbar>ul').css('padding-left','7.5rem','!important');
    //}

    // Change the background of the nav bar to whatever you want just replace red.
    //$(".user_toolbar").css('background', 'red').css('box-shadow', '0px 1px red inset, 0px -1px red inset').css('border-bottom', '1px solid red');

    // Use the transparent navbar color from the banner script.
    //$(".user_toolbar").css("background", "linear-gradient(rgba(146, 27, 87, 0) 0%, rgb(146, 27, 87) 85%)").css("position", "relative").css("border-bottom", "none").css("box-shadow", "none");
})();
