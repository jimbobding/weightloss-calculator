

document.getElementById("btn1").addEventListener("click", weight);


// Function to multiply imputed weight by 0.035 and return the value
let kgs = parseFloat(document.getElementById("weight").value)

function weight() {
    let kgs = parseFloat(document.getElementById("weight").value)
    let myWeight = document.getElementById("weightx").innerHTML = kgs * 0.035;

    console.log(kgs)
    return myWeight
}

// Function to select teh walking speed from the dropdown menu, and disply walking speed.

function speed() {
    let select = document.getElementById("selectbox")
    let mySpeed = document.getElementById("speedx").innerHTML = (select.options[select.selectedIndex].value)
    console.log(mySpeed)
    return mySpeed
}

// Function to take the inputed height and then divide the height by the walking speed

function height1() {
let height = document.getElementById("height")
let myHeightDivdeSpeed = document.getElementById("heightx").innerHTML = speed() / height.value 
    console.log(myHeightDivdeSpeed)
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
    console.log(calorieslost)
     document.getElementById('yourResult').innerHTML = calorieslost
    return calorieslost

   
}


//javascript.js
//set map options
var myLatLng = { lat: 38.3460, lng: -0.4907 };
var mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP

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
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.METRIC
    }

    //pass the request to the route method
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>";

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

        let time = result.routes[0].legs[0].duration
        let div = time / 12
        let dist = result.routes[0].legs[0].distance.value 
            console.log(result)
           console.log(time)
           console.log(dist)
           
    });
}

//create autocomplete objects for all inputs
var options = {
    types: ['(cities)']
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);








