function fotoPrompt(melding) {
    var naam = "Gebruiker";
    foto = prompt;
    alert('Hallo ' + naam +':'+ ' Je klikte op #' + melding +' van de 3 afbeeldingen');
}
function uitrekenen() {
    var a = parseInt(window.document.getElementById("box").value, 10);
    var b = parseInt(window.document.getElementById("box2").value, 10);
    var subtotaal = a * b;
    alert('totaal is: '+ a + ' * '+ b +' = ' + subtotaal);
    var c = prompt("Vul aub nog een nummer in om het vorige totaal mee te vermenigvuldigen.", "");
    var totaal = subtotaal * c;
    alert("totaal is nu: "+totaal);
}
function Achtergrondkleur(mijnkleur) {
    document.getElementById("wrapperdiv").style.backgroundColor = mijnkleur;
}
function optellen() {
    var eerste;
    var tweede;
    var resultaat;
    eerste = parseFloat(document.rekenmachine.cijfer.value);
    tweede = parseFloat(document.rekenmachine.cijfer2.value);
    resultaat = eerste + tweede;
    alert("Het resultaat is: "+resultaat);
    document.rekenmachine.antwoord.value = resultaat;
}
function aftrekken() {
    var eerste;
    var tweede;
    var resultaat;
    eerste = parseFloat(document.rekenmachine.cijfer.value);
    tweede = parseFloat(document.rekenmachine.cijfer2.value);
    resultaat = eerste - tweede;
    alert("Het resultaat is: "+resultaat);
    document.rekenmachine.antwoord.value = resultaat;
}
function vermenigvuldigen() {
    var eerste;
    var tweede;
    var resultaat;
    eerste = parseFloat(document.rekenmachine.cijfer.value);
    tweede = parseFloat(document.rekenmachine.cijfer2.value);
    resultaat = eerste * tweede;
    alert("Het resultaat is: "+resultaat);
    document.rekenmachine.antwoord.value = resultaat;
}
function gedeelddoor() {
    var eerste;
    var tweede;
    var resultaat;
    eerste = parseFloat(document.rekenmachine.cijfer.value);
    tweede = parseFloat(document.rekenmachine.cijfer2.value);
    resultaat = eerste / tweede;
    alert("Het resultaat is: "+resultaat);
    document.rekenmachine.antwoord.value = resultaat;
}
function opdracht5() {
    var x = prompt("Vul aub een getal in", "");
    if (x == 100) {
        document.getElementById("wrapperdiv").style.backgroundColor = 'red';
        alert("Bingo! je getal is exact 100");
    } else {
        if (x < 100) {
            document.getElementById("wrapperdiv").style.backgroundColor = 'orange';
            alert("Je getal is lager dan 100");
        } else {
            if (x > 500) {
                document.getElementById("wrapperdiv").style.backgroundColor = 'blue';
                alert("Je getal is groter dan 500, vul aub een nieuwe getal in");
                opdracht5();
            } else {
                if (x > 100) {
                    document.getElementById("wrapperdiv").style.backgroundColor = 'green';
                    alert("Je getal is te groot voor me");
                }    
            } 
        }
    }
}
function leeftijd() {
    var getal = prompt("Voer je leeftijd in", "");
    if(getal == 18) {
        alert("Je bent net volwassen geworden, gefeliciteerd.");
    }
    else if(getal < 18) {
            alert("Je bent nog een kind.");
    }
    else if(getal > 18) {
        alert("Je bent een volwassen persoon.");
    }
}
function promptwhileloop() {
    var I = 1;
    var getaltemp = 0;
    var resultaat = 0;
    while (I <= 10) {
        var getaltemp = (prompt("Teller staat op " + I + " Vul een getal in", ""));
        while(getaltemp === "" && getaltemp != null) {
            var getaltemp = (prompt("Teller staat op " + I + " Vul een getal in", ""));
        }
        var getal = parseInt(getaltemp);
        resultaat = resultaat + getal;
        I++;
    } 
    
    alert("Bij elkaar opgeteld is dat: " + resultaat);

}