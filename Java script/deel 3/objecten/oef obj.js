window.onload = function (){
    vraag5c();
}

function vraag1(){
    let object = {
        naam : 'Giannakos',
        voornaam: 'dimitri',
        telefoonnummer: '0435794830',
        geboortedatum: '30/05/1999',
        email: 'dimitrigiannakos13@gmail.com',
        hobby: 'voetbal'
    };
    console.log(object.naam +' '+ object.voornaam);
}

function vraag2(){
    let object = {
        naam : 'Giannakos',
        voornaam: 'dimitri',
        telefoonnummer: '0435794830',
        geboortedatum: '30/05/1999',
        email: 'dimitrigiannakos13@gmail.com',
        hobby: 'voetbal'
    };
    document.getElementById('obj').innerHTML= 'mijn naam is'+ ' ' +
        object.voornaam + ' ' + object.naam + ' '+'en ik ben geboren op' + ' '+ object.geboortedatum
    + '.' + 'Mijn telefoonnummer is ' + ' '+ object.telefoonnummer;
}

function vraag3(){

    let object = {
        naam : 'Giannakos',
        voornaam: 'dimitri',
        telefoonnummer: '0435794830',
        geboortedatum: '30/05/1999',
        email: 'dimitrigiannakos13@gmail.com',
        hobby: 'voetbal'
    };
    object.lengte = '1m80';
    object.gewicht = '75kg';
    object.leeftijd = '22';
    object.huidskleur = 'lichtgetint';
    object.oogkleur = 'groen';

    let uitkomst= '';
    let eigenschappen;
    for(eigenschappen in object){
        uitkomst= uitkomst + object[eigenschappen] + ' ';
    }
    document.getElementById('obj').innerHTML = uitkomst;
}

function vraag4(){
    let object = {
        naam : 'Giannakos',
        voornaam: 'dimitri',
        telefoonnummer: '0435794830',
        geboortedatum: '30/05/1999',
        email: 'dimitrigiannakos13@gmail.com',
        hobby: 'voetbal'
    };
    object.lengte = '1m80';
    object.gewicht = '75kg';
    object.leeftijd = '22';
    object.huidskleur = 'lichtgetint';
    object.oogkleur = 'groen';

    delete object.lengte;
    delete  object.gewicht;

    let uitkomst= '';
    let eigenschappen;
    for(eigenschappen in object){
        uitkomst= uitkomst + object[eigenschappen] + ' ';
    }
    document.getElementById('obj').innerHTML = uitkomst;

}

function vraag5a(){
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'},
    ];
    let klantenUitGenk = [];
    klanten.forEach(klant =>  {
        if(klant.stad === 'Genk'){
            klantenUitGenk.push(klant);
        }
    });

    console.log(klantenUitGenk);
}

function vraag5b(){
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'},
    ];

    klanten.forEach(klant => {
        console.log(klant.naam.length);
    })
}

function vraag5c(){
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'},
    ];

    let antwerpen = 'Antwerpen';
    klanten.forEach(klant => {
        klant.stad = antwerpen;
        antwerpen = antwerpen + '-Antwerpen';
    });
    console.log(klanten);
}

function vraag5d(){
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'},
    ];

    klanten.forEach(klant => {
        let par= document.createElement('p');
        let arr = object.values(klant);
        
    })
}