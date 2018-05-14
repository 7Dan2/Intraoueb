var d = new Date();
var y = d.getFullYear();
var m = ["janvier",  "f&eacute;vrier",  "mars",  "avril", "mai", "juin", "juillet", "ao&ucirc;t", "septembre", "octobre", "novembre", "d&eacute;cembre"];
var j = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
var day = d.getDate();
document.getElementById("date").innerHTML = j[d.getDay()]+"&nbsp;"+day+"&nbsp;"+m[d.getMonth()]+"&nbsp;"+y;
