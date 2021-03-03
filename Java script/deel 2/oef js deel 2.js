/* oef 1 */
/*
let zin1,zin2,zin3;
zin1 = "Dit is de eerste zin";
zin2= "Dit is de tweede zin";
zin3 = "Dit is de derde zin";

console.log(zin1);
console.log(zin2);
console.log(zin3);

document.getElementById("zin1").innerHTML= "Dit is de eerste zin.";
document.getElementById("zin2").innerHTML= "Dit is de tweede zin.";
document.getElementById("zin3").innerHTML= "Dit is de derde zin.";




/* oef 2 */
/*
let langezin= zin1 + ' ' + zin2 + ' ' + zin3;
console.log(langezin);
alert(langezin)



/* oef 3 */
/*
let koekje = 'Ik wil een koekje';
let uitkomst;

uitkomst = koekje.charAt(0);
uitkomst = koekje.charAt(3);
console.log(koekje.lastIndexOf('k'));
console.log(koekje.lastIndexOf('e'));
console.log(koekje.length);


// oef 4
let lasagne = koekje.replace('koekje', 'lasagne van de pxl').toUpperCase();
console.log(lasagne);
*/

// oef 5
/*
let woord= prompt('geef een random zin in');
alert(woord.length);
*/


// oef 6
/*
let woord= prompt('geef een random zin in');
let uitkomst;

uitkomst = zin.indexOf(' ');
window.alert('De eerste spatie staat op positie:' + ' ' + uitkomst);
window.alert('De eerste spatie staat op positie: ${uitkomst} .');
*/
//oef 7
let getal1 = prompt('Geef het eerste getal in ');
let getal2 = prompt('Geef het tweede getal in ');

let uitkomst = parseFloat(getal1) * parseFloat(getal2);
document.getElementById('uitkomst').innerHTML= uitkomst;

//oef 8
let leeftijd = prompt('Geef je leeftijd in');

if(leeftijd<18){
    alert('probeer het volgend jaar opnieuw');
}else{
    alert('welkom');
}




