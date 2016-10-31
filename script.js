      var map;

      function createMap(lat, lng, message) {
        var myLatlng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            center: myLatlng,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.HYBRID
          };

        map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Lat: " + lat + ", Long: " + lng + "\n" + message
          });
      }

      function placeMarker(){
          var lat = document.getElementById("longitude").value;
          var longt = document.getElementById("lang").value;
          var myLatlng = new google.maps.LatLng(lat, longt);
          createMap(lat,longt);
          var marker = new google.maps.Marker({
            position: myLatlng,
            animation: google.maps.Animation.DROP,
            map: map,
            title: document.getElementById("placeMarkerText").value
          });
          createMap( lat, longt, document.getElementById("placeMarkerText").value);
      }


