// ==UserScript==
// @name         Fim Banner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Time to take over fimfiction.net!
// @author       YourTrueOverlord
// @match        http://tampermonkey.net/index.php?version=4.4&ext=dhdg&updated=true
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @include http://www.fimfiction.net/*
// @include https://www.fimfiction.net/*
// ==/UserScript==


(function() {
    'use strict';
    $(".page-nav-bars").append('<div><a href="/" class="home_link" style="background-image: url(https://github.com/Inrixia/Inrixia.github.io/raw/master/MiPpYJx.jpg);width: 100%;position: absolute;height: 300px;background-position: center top;background-size: cover;"></a><div style="height: 260px;"></div></div>');
    $(".user_toolbar").css("background", "linear-gradient(rgba(146, 27, 87, 0) 0%, rgb(146, 27, 87) 85%)").css("position", "relative").css("border-bottom", "none").css("box-shadow", "none");

    $('.page-nav-bars').append($('.user_toolbar'));
    $('#home_link').css("z-index", 999);
})();
