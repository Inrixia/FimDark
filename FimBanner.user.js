// ==UserScript==
// @name         Fim Banner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Time to take over fimfiction.net!
// @author       YourTrueOverlord
// @match        http://tampermonkey.net/index.php?version=4.4&ext=dhdg&updated=true
// @grant        none
// @run-at document-start
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @include http://www.fimfiction.net/*
// @include https://www.fimfiction.net/*
// ==/UserScript==


(function() {
    $(".user_toolbar").css("background", "linear-gradient(rgba(146, 27, 87, 0) 0%, rgb(146, 27, 87) 85%)").css("position", "relative").css("border-bottom", "none").css("box-shadow", "none");
    $( document ).ready(function() {
        //Uncomment lines 18 and 27 to Only show banner on the homepage. Everything else is default
        //if (window.location.pathname == '/'){
        //-------------------------------------------------------------------------------------------vv Here is the url that you need to change to change the picture!
        $(".page-nav-bars").append('<div><a href="/" class="home_link" style="background-image: url(https://github.com/Inrixia/inrixia.github.io/raw/master/REPLACE_THIS_URL.png);width: 100%;position: absolute;height: 300px;background-position: center top;background-size: cover;"></a><div style="height: 260px;"></div></div>');
        //-------------------------------------------------------------------------------------------^^ Here is the url that you need to change to change the picture!

        $(".user_toolbar").css("background", "linear-gradient(rgba(146, 27, 87, 0) 0%, rgb(146, 27, 87) 85%)").css("position", "relative").css("border-bottom", "none").css("box-shadow", "none");
        $('.page-nav-bars').append($('.user_toolbar'));
        $('#home_link').css("z-index", 999);
        //}
    });
})();
