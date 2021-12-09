

//document.getElementById("btn1").addEventListener("click", weight);


// Function to multiply inputed weight by 0.035 and return the value
 

function weight() {
    let kgs = parseFloat(document.getElementById("weight").value)
    let myWeight = kgs * 0.035;

    
    return myWeight
}

// Function to select teh walking speed from the dropdown menu, and disply walking speed.

function speed() {
    let select = document.getElementById("selectbox")
    let mySpeed = document.getElementById("speedx").innerHTML = (select.options[select.selectedIndex].value)
   
    return mySpeed
}

// Function to take the inputed height and then divide the height by the walking speed

function height1() {
let height = document.getElementById("height")
let myHeightDivdeSpeed =  speed() / height.value 
  
    return myHeightDivdeSpeed
}

// Function to add the weight and height functions and then multiply by 0.029

function weightHeight() {
    let weightPlusHeight = weight() + height1() 
    let multiply = weightPlusHeight * 0.029

    return multiply
}

function result() {
    let kgs = parseFloat(document.getElementById("weight").value)
    let calorieslost = weightHeight() * kgs;

    document.getElementById('yourResult').innerHTML = calorieslost
    return calorieslost
   
}
 console.log(result())
//javascript.js
//set map options
const center = { lat: 50.064192, lng: -130.605469 };
const defaultBounds = {
  north: center.lat + 0.1,
  south: center.lat - 0.1,
  east: center.lng + 0.1,
  west: center.lng - 0.1,
};

var myLatLng = { lat: 38.3460, lng: -0.4907 };
var mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
      bounds: defaultBounds,
  componentRestrictions: { country: "uk" },
  fields: ["address_components", "geometry", "icon", "name"],
  origin: center,
  strictBounds: false,
  types: ["establishment"],

};

//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);


//define calcRoute function
function calcRoute() {
    //create request
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.WALKING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.METRIC
    }

    //pass the request to the route method
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

        // Determines the time of your journey by dividing length of journey divided by the speed of the walk 
        let duration = result.routes[0].legs[0].distance.value /  speed() 
        // Hours = duration divided by modulou seconds in an hor by hours in a day divided by second in an hour 
        let hours = Math.floor(duration % (3600*24) / 3600);
             if (hours > 0) {
                hours = hours + " hours ";
            } else {
                hours = "";
            }
        let minutes = Math.floor(duration % 3600 / 60);
              if (minutes > 0) {
                minutes = minutes + " minutes ";
            } else {
                minutes = "";
            }
        let days = Math.floor(duration / (3600*24));
              if (days > 0) {
                days = days + " days ";
            } else {
                days = "";
            }

        
        let kgs = parseFloat(document.getElementById("weight").value)
        let calorieslost = weightHeight() * kgs;
        let time = result.routes[0].legs[0].duration.value / 60
        let calsPerMIn = time * calorieslost
        
      

        console.log(result.routes[0].legs[0].duration.text)
        console.log(duration)
        console.log(minutes)
        console.log(hours)
        console.log(days)


            //Get distance and time
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Walking  distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fas fa-hourglass-start'></i> : " + days + hours + minutes +  ".</div>" +  "You will burn " + calsPerMIn + " during this journey";

            //display route
            directionsDisplay.setDirections(result);
        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);

            //show error message
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
        }

    });
}
// let duration = result.routes[0].legs[0].distance.value /  speed() 
// function time_convert(duration)
//  { 
//      let duration = result.routes[0].legs[0].distance.value /  speed() 
//   var hours = Math.floor(duration / 60);  
//   var minutes = duration % 60;
//   return hours + ":" + minutes;         
// }

// console.log(time_convert(duration))

//create autocomplete objects for all inputs
var options = {
    types: ['geocode', 'establishment']
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, mapOptions);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, mapOptions);




document.getElementById("mainBtn").addEventListener("click", weight);


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display !== "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
