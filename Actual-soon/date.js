function maDate() {
    var Date;
    year = date.getFullYear();
    var months = ["janvier", "fevrier", "mars", "avril", "mai"];
    var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "jeudi", "vendredi", "Samedi"];
    day = date.getDate();
    document.getElementById("date1").innerHTML = days[date.getDay()] + "&nbsp;" + day + "&nbsp;" + months[date.getMonth()] + "&nbsp;" + year;
}
    maDate()