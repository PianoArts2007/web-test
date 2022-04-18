//Temperatură ext//
setInterval(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("temperatureExt").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/temperatureExt", true);
    xhttp.send();
}, 10000);
//Temperatură interior//
setInterval(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("temperatureIn").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/temperatureIn", true);
    xhttp.send();
}, 10000);
//Umiditate in//
setInterval(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readystate == 4 && this.status == 200) {
            document.getElementById("humidity").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/humidity", true);
    xhttp.send();
}, 10000);
//Umiditate ext//
setInterval(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readystate == 4 && this.status == 200) {
            document.getElementById("humidityExt").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/humidityExt", true);
    xhttp.send();
}, 10000);
//Temperatură apă update//
setInterval(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readystate == 4 && this.status == 200) {
            document.getElementById("WaterTemp").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/WaterTemp", true);
    xhttp.send();
}, 10000);
//Lumină update//
setInterval(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readystate == 4 && this.status == 200) {
            document.getElementById("light").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/light", true);
    xhttp.send();
}, 10000);
///////////////////////////
console.log("Site created on 1.16.2022");
//const p = document.createElement("p"); //The header
//p.innerHTML = "htgfh"; //"<u></u>" Underlined text
//document.body.append(p);