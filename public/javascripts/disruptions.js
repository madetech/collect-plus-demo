function initialize(points) {
    var points = points;

    var mapOptions = {
        center: new google.maps.LatLng(51.509865, -0.118092),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    for (index = 0; index < points.length; ++index) {

        console.log('blaaaaaaaaaaaah');
        console.log(points);


        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(points[index].lat, points[index].lng),
            map: map,
            title: points[index].name
        }).addListener('click', function() {
            var infoWindow = new google.maps.InfoWindow({
                content: this.title
            });

            infoWindow.open(map, this);
        });
    }
}
