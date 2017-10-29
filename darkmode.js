(function() {
    $("head").append('<link id="first_dark" rel="stylesheet" href="https://inrixia.github.io/darkmode.css" type="text/css">');
    window.onload = function(){
        $("head").append('<link rel="stylesheet" href="https://inrixia.github.io/darkmode.css" type="text/css">');
        $("#first_dark").remove();
    };
})();
