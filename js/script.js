/*global $*/
function loadData() {
    "use strict";
    var $body = $('body'),
        $wikiElem = $('#wikipedia-links'),
        $nytHeaderElem = $('#nytimes-header'),
        $nytElem = $('#nytimes-articles'),
        $greeting = $('#greeting'),
        streetStr = $('#street').val(),
        cityStr = $('#city').val(),
        address = streetStr + ', ' + cityStr,
        streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address;

    $wikiElem.text("");
    $nytElem.text("");
    $greeting.text('So, you wanna live at ' + address + '?');

    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    return false;
}

$('#form-container').submit(loadData);