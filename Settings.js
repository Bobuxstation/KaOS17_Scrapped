//background
function bg1() {
   document.getElementById("body").style.backgroundImage = "url(bg.jpg)";
}
function bg2() {
   document.getElementById("body").style.backgroundImage = "url(citywater.png)";
}
function bg3() {
   document.getElementById("body").style.backgroundImage = "url(Flowers.png)";
}
function bg4() {
   document.getElementById("body").style.backgroundImage = "url(Boardwalk.png)";
}
function bg5() {
   document.getElementById("body").style.backgroundImage = "url('https://source.unsplash.com/1600x900/?')";
}
function custom_bg(event) {
  var reader = new FileReader();
  reader.onload = function() {
    document.getElementById("body").style.backgroundImage = `url(${reader.result})`;
    document.getElementById("body").style.backgroundSize = 'cover';
  }
  reader.readAsDataURL(event.target.files[0]);
}

//Color scheme

function color1() {
  document.getElementById("style").href = "style.css";
}
function color2() {
  window.alert("An error has occured while selecting the theme!");
}
function color3() {
  window.alert("An error has occured while selecting the theme!");
}
function color4() {
  document.getElementById("style").href = "classic.css";
  window.alert("An error has occured while loading some items!");
}