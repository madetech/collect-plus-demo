function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(51.509865, -0.118092),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // test marker
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(51.539282, -0.36197),
        map: map,
        title: 'Traffic is slow on the approach with tailbacks reaching beyond Polish War Memorial. Expect delays.'
    });

    marker.addListener('click', function() {
        var infoWindow = new google.maps.InfoWindow({
            content: 'Traffic is slow on the approach with tailbacks reaching beyond Polish War Memorial. Expect delays.'
        });

        infoWindow.open(map, marker);
    });
}