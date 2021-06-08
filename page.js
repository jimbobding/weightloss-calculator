

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
    return calorieslost

   
}








