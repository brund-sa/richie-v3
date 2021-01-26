var swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/* =====================================================

                        MAP AREA 

=======================================================*/
// Initialize and add the map
function initMap() {
var iconBase = '../images/icons/map-marker.png';
// The location of Uluru
const uluru = { lat: 21.536214, lng: 39.172868 };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
    styles:[
            {
                "featureType": "all",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#B78C33"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#c4c4c4"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#B78C33"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#B78C33"
                    },
                    {
                        "lightness": "0"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#B78C33"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#575757"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#999999"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
});
// The marker, positioned at Uluru
const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: iconBase
});
}


/* =====================================================

                        
                    Contact form 

=======================================================*/
$("#send_form").on('submit', function(){
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var number = $("#number").val().trim();
    var message = $("#message").val().trim();

    ({
        url: './mail.php',
        type: 'POST',
        cache: false,
        data: {'name': name, 'email': email, 'number': number, 'message': message},
        dataType: 'html',
        beforeSend: function() {
            $("#send").addClass("js-active");
        },
        success: function(data) {
            if(!data || data != "Good"){
                $("#m_err").addClass("js-active");
                $(".form-box").addClass("js-active");
                $("#send").removeClass("js-active");
            }

            else {
                $("#m_sent").addClass("js-active");
                $(".form-box").addClass("js-active");
                $("#send").removeClass("js-active");
                $("#send_form").trigger("reset");
            }
            $('.js-popup-close').click(function() {
                $(this).parents('.js-popup-fade').removeClass("js-active");
                $('.form-box').removeClass("js-active");
                return false;
            });

            $(document).keydown(function(e) {
                if (e.keyCode === 27) {
                    e.stopPropagation();
                    $('.js-popup-fade').removeClass("js-active");
                    $('.form-box').removeClass("js-active");
                }
            });

            $('.js-popup-fade').click(function(e) {
                    if ($(e.target).closest('.js-popup').length == 0) {
                    $('.js-popup-fade').removeClass("js-active");
                    $('.form-box').removeClass("js-active");
                }
            });
        },
    })
    return false;
});
