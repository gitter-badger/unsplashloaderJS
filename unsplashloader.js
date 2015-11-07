// build the URL

var url = 'https://api.unsplash.com/photos/random/';

// get an API key from 
// https://unsplash.com/developers
var apikey = 'YOURAPIKEY';

// uncomment for a user prompt for primary color
// var primaryColor = prompt("Please enter a primary color:");

// uncomment for a width prompt
// var imageWidth = prompt("Please enter an image width:");

var uri = url + '?client_id=' + apikey + '&featured'; // [uncomment to add query or image width]+ '&query=' + primaryColor + '&width=' +  imageWidth;

// parse the JSON to get the goodies

$.getJSON( uri , function(data) {
         //alert(data.id);
         //alert(data.user.name);

document.getElementById("id").innerHTML=data.id;

document.getElementById("name").innerHTML=data.user.name;

document.getElementById("username").innerHTML=data.user.username;

// get thumbnail link
// document.getElementById("thumb").innerHTML=data.urls.thumb;
// put thumbnail in div
var thumby = document.getElementById('thumb');
var img = document.createElement('img');
img.src = data.urls.thumb;
thumby.appendChild(img);

// get small image link
// document.getElementById("small").innerHTML=data.urls.small;
// put thumbnail in div
var smally = document.getElementById('small');
var img = document.createElement('img');
img.src = data.urls.small;
smally.appendChild(img);

// get Full image link
// document.getElementById("full").innerHTML=data.urls.full;
// put thumbnail in div
var fully = document.getElementById('full');
var img = document.createElement('img');
img.src = data.urls.full;
fully.appendChild(img);


});
