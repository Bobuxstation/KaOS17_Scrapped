    var span = document.getElementById('span');
    var span2 = document.getElementById('footertime');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("") + ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
  span2.textContent = 
    ("") + ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
};

setInterval(time)