document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    document.getElementById("getPosition").addEventListener("click", getPosition);
    
    

function getPosition() {
    var options = {
        enableHighAccuracy: true,
        maximumAge: 3600000
    }
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

    function onSuccess(position) {
        alert(
        'Latitude: '          + position.coords.latitude          + '\n' +
        'Longitude: '         + position.coords.longitude         + '\n' +
        'Altitude: '          + position.coords.altitude          + '\n' +
        'Accuracy: '          + position.coords.accuracy          + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
        'Heading: '           + position.coords.heading           + '\n' +
        'Speed: '             + position.coords.speed             + '\n' +
        'Timestamp: '         + position.timestamp                + '\n');
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    }
}


 // Find current position of divice with GPS(latitude,longitude)    
navigator.geolocation.getCurrentPosition(onSuccess, onError);  
}
load = false;
function onSuccess(position){  
    var element = document.getElementById('geolocation');  
    element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' + 'Longitude: ' + position.coords.longitude + '<br />' + '<hr />' ;  
    var lat = position.coords.latitude;  
    var lang = position.coords.longitude;  
    var myLatlng = new google.maps.LatLng(lat, lang);  
    if(!load){
        var mapOptions = {  
            zoom: 15,  
            center: myLatlng  
        }  
            //Creates a new map inside the <div> element    
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);  
        //A marker identifies a location on a map.    
        var marker = new google.maps.Marker(  
        {  
            position: myLatlng,  
            map: map  
        }); 
        
    }

    load = true;
}  

function onError(error){  
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');  
}  
 //Continuously watch divice's current GPS position    
var watchID = navigator.geolocation.watchPosition(onSuccess, onError,{  
        timeout: 3000  
});  
 //Simply passes the indicated event to the browser, which handles it according to the browser's DOM event model.    
google.maps.event.addDomListener(window, 'load', onSuccess);  


marka =[];

function recorre(x) {
    for(i=0;i<x.length;i++){
    var latlng = x[i]
    //A marker identifies a location on a map.    
    var marker = new google.maps.Marker({  
    position: latlng,  
    map: map  
    }); 
    }    
}

function mark(){
    lat=$('#lat').val();
    lang=$('#long').val();
    var latlng = new google.maps.LatLng(lat, lang)
    marka.push(latlng)
    recorre(marka)
}
