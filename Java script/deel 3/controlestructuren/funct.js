/* oef 1 */
// let geboortejaar = prompt('wat is je geboortejaar?', 'jaar');
// let currentDate = new Date(dag);
// let currentYear = currentDate.getFullYear(); // 2021
//
// if(currentYear - currentDate >= 20){
//     alert('Je bent oud genoeg om de ...');
// }


/* oef 2*/
// let sporten = prompt('sport je graag');
// if (sporten === 'ja'){
// alert('Just Do it');
// }
// else{
// alert('Jammer,niet opgeven!');
// }


/* oef 3 */
// let welkomszin = "Welkom op de webpagina!";
// document.getElementById('demo').innerHTML = welkomszin;
// setInterval(function (){
//     var d = new Date(); // dit geeft al huidige dag en tijd aan
//     let dagdeel;
//
//     if (d.getHours() < 12 ){
//         dagdeel = "voormiddag"
//     }
//     else{
//         dagdeel = "Namiddag"
//     }
//
//     document.getElementById('voorm').innerHTML = `Het is ${dagdeel} op
//     ${d.toString()}`;
// }, 1000)


/* oef 4 */
// let date = new date();
// let uur = date.getHours();
//
// if (uur >= 7 && uur <= 11){
//     document.getElementById('demo').innerHTML = 'voormiddag' + uur.toString();
// }else  if(uur <= 17 && uur >= 12){
//     document.getElementById('demo').innerHTML = 'Goede dag' + uur.toString();
// }else if ( uur >= 18 && uur < 7){
//     document.getElementById('demo').innerHTML = 'Goede avond' + uur.toString();
// }
//

/* oef 5 */
// let getal = prompt('Geef een getal in');
// getal = parseFloat(getal);  // zet string om naar getal --> eerst '50'(string) en nu 50(getal).
//
//     if (getal < 50) {
//         alert('Te laag');
//     }
//     else if (getal === 50){
//         alert('Proficiat');
//     }
//     else {
//         alert('Te hoog');
//
//     }


/* oef 6 */
// let sporten = prompt('sport je graag');
// switch (sporten.toLowerCase()){
//     case 'ja':
//         alert('Just do it!');
//         break;
//     case 'nee':
//     alert('Jammer, blijf dan maar liggen');
//     break;
//     default:
//         alert('Dat was niet duidelijk, antwoord je vanuit je luie zetel?');
// }

/* oef 7 */
// function vraag7() {
// let currentdate = new date();
// let currentmonth = currentdate.getMonth();
// let month = '';
// switch (currentmonth) {
//     case 0:
//         month = 'januari';
//         break;
//     case 1:
//         month = 'februari';
//         break;
//     case 2:
//         month = 'maart';
//         break;
//     case 3:
//         month = 'april';
//         break;
//     case 4:
//         month = 'mei';
//         break;
//     case 5:
//         month = 'juni';
//         break;
//     case 6:
//         month = 'juli';
//         break;
//     case 7:
//         month = 'augustus';
//         break;
//     case 8:
//         month = 'september';
//         break;
//     case 9:
//         month = 'oktober';
//         break;
//     case 10:
//         month = 'november';
//         break;
//     case 11:
//         month = 'december';
//         break;
//
// }
// document.getElementById('vraag7').innerText= `Het is de maand ${month}`;
// }
/* oef 8 */
// let date= new date();
// let uur = data.getHours();
// let dagdeel = '';
//
// if (uur >= 7 && uur <= 11){
//     dagdeel = 'ochtend';
// }else  if(uur <= 17 && uur >= 12){
//     dagdeel = 'middag';
// }else if ( uur >= 18 && uur < 7){
//     dagdeel= 'avond';
// }
//
// switch (dagdeel){
//     case 'ochtend':
//         document.getElementById('demo').innerText = 'goedemorgen' + uur.toString();
//         break;
//     case 'middag':
//         document.getElementById('demo').innerText = 'goede dag' + uur.toString();
//         break;
//     case 'avond':
//         document.getElementById('demo').innerText = 'goede avond' + uur.toString();
//         break;
// }

/* oef 9 */
// let getal = prompt('Geef een getal in tussen 0 tot 10');
//
// do{
//     getal = parseInt(prompt('Geef een getal in van 0 tot 10'));
// }while (getal < 0 && getal > 10)
//
//
// for(let i = 1; i < 11;i++){
//     console.log(i + 'X' + getal + '=' + i*getal);
// }

/* oef 10 */
// let hashtags;
// for(let i = 0; i<7;i++){
//     hashtags= '';
//     for(let j= 0;j<i;j++){
//         hashtags += '#'
//     }
// console.log(hashtags);
// }

/* oef 10 B */
// for(let i = 0; i<7;i++){
//     console.log('#'.repeat(i));
// }


/* oef 11 */
// let aantallijnen = prompt('uit hoeveel lijnen moet de driehoek bestaan?');
//
// do{
//     aantallijnen = parseInt(prompt('Geef een getal in van 0 tot 10'));
// }while (aantallijnen < 0 && aantallijnen > 10)
// for(let i = 0; i<aantallijnen;i++){
//     console.log('#'.repeat(i));
// }

/* oef 12 */
// let aantallijnen = prompt('Geef een getal');
// let karakter= '#';
// let num= '';
// let spatie = '';
// let spaties;
// let aantalSpaces= aantallijnen - 1;
//
//
// for(let i= 1; i<= aantallijnen; i++){
//     num = num + karakter;
//     spaties = spatie.repeat(aantalSpaces);
//     console.log(spaties + num);
//     aantalSpaces = aantalSpaces - 1;
// }

/* oef 13 */

// let aantalLijnen = prompt('Geef het aantal lijnen in');
// let karakter = '#';
// let num = '';
// let spatie = ' ';
// let spaties;
// let aantalSpaces = aantalLijnen - 1;
//
// for (let i = 1; i <= aantalLijnen; i++) {
//     num = num + karakter;
//     spaties = spatie.repeat(aantalSpaces);
//     console.log(spaties + num + karakter.repeat(i - 1));
//     aantalSpaces = aantalSpaces - 1;
// }




