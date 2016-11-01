      var map;
      var locationDetails = new Array();

      function mainfn () {
          console.log("inside mf");
          var myLatlng = new google.maps.LatLng(0, 0);
            var mapDetails = {  
                  center: myLatlng, 
                  zoom: 2,
                  //mapTypeId: google.maps.MapTypeId.HYBRID
                };

            map = new google.maps.Map(document.getElementById("map"), mapDetails);
            var description = new google.maps.InfoWindow();
            var l = locationDetails.length;
            console.log(l);
            for( var i=0; i<l; i++ )
            {
                var marker = new google.maps.Marker({
                      position:  new google.maps.LatLng(locationDetails[i][0], locationDetails[i][1]),
                      map: map,
                      animation: google.maps.Animation.BOUNCE,
                      title: "Lat: " + locationDetails[i][0] + ", Long: " + locationDetails[i][1] + "\n" + locationDetails[i][2]
                });
                google.maps.event.addListener(marker, 'click', (function(marker, i) { return function() {
                      description.setContent(locations[i][2]);
                      description.open(map, marker);     }
                })(marker, i));
            }
      }

      // function createMap(lat, lng, message, i) {

      //   var myLatlng = new google.maps.LatLng(lat, lng);
      //   var mapDetails = {
      //       center: myLatlng,
      //       zoom: 8,
      //       //mapTypeId: google.maps.MapTypeId.HYBRID
      //     };

      //   map = new google.maps.Map(document.getElementById("map"), mapDetails);
      //   var description = new google.maps.InfoWindow();


      //   var marker = new google.maps.Marker({
      //       position: myLatlng,
      //       map: map,
      //       animation: google.maps.Animation.BOUNCE,
      //       title: "Lat: " + lat + ", Long: " + lng + "\n" + message
      //     });

      //   google.maps.event.addListener(marker, 'click', (function(marker, i) {
      //   return function() {
      //     description.setContent(message);
      //     description.open(map, marker);
      //   }
      // })(marker, i));
      // }

      function placeMarker(){
          var lat = document.getElementById("longitude").value;
          var longt = document.getElementById("lang").value;
          var msg = document.getElementById("placeMarkerText").value;

          var myLatlng = new google.maps.LatLng(lat, longt);
          //createMap(lat,longt);
          var marker = new google.maps.Marker({
            position: myLatlng,
            animation: google.maps.Animation.BOUNCE,
            map: map,
            title: msg
          }); 

          var currentLocation = new Array();
          currentLocation.push( +lat, +longt , msg );
          locationDetails.push( currentLocation );
          mainfn();
          ////////////////
          // var l = locationDetails.length;
          // console.log ( l );
          // for( var i=0; i< locationDetails.length; i++ )
          // createMap( lat, longt, msg , i);
      }


