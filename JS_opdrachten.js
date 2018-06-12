
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