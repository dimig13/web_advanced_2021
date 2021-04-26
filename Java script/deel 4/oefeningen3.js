
document.getElementById("red").style.color = "darkred";
document.getElementById("weg").remove();


let titel = document.createElement('h1');
let tekst = document.createTextNode("Welkom Pandix");

titel.appendChild(tekst);
let element = document.getElementById("header")
element.appendChild(titel);


let aside = document.createElement('aside');
aside.innerText = "Gegevens hogeschool";
let main = document.getElementById('main');
main.appendChild(aside);

