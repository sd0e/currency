$(function() {
    console.log(`
    Currency
    Made in 2020 by Sebastian Doe                                                               
    `)
    $('#bookmarks').click(function() {
        if (window.sidebar && window.sidebar.addPanel) {
            window.sidebar.addPanel(document.title, url, '');
        } else if (window.external && ('AddFavorite' in window.external)) {
            window.external.AddFavorite(url, document.title);
        } else if (window.opera && window.print) {
            this.title = document.title;
            return true;
        } else {
            alert('Go to the homepage and press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
        }
    });
});

function refreshSearch(searchInput) {
    var input = $(searchInput).val().toLowerCase();
    $('#resultsList').children('a').each(function() {
        var keywords = $(this).attr("keywords").toLowerCase();
        var title = $(this).text().toLowerCase();
        if (title.includes(input) || keywords.includes(input)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}

function adBlock() {
    alert("AdBlock blocks the requests to the currency code website. Please disable it if you want to access the website.")
}

$.getJSON('https://json.geoiplookup.io/', function(data) {
    var symbol = data.currency_code;
    $(".symbol").text(symbol);
});