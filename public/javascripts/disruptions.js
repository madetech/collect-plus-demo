function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(51.509865, -0.118092),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}