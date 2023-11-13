/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va scritto in pagina in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

//Macropensiero per svolgere l'esercizio

                                    //1) Chiedere all'utente  il numero di kilometri che vuole percorrere e l'età del passeggero

const kmDaSvolgere = (prompt("Inserisci i kilometri che vuoi svolgere"));
console.log("km decisi dal passeggero che vuole percorrere " + kmDaSvolgere);

const etàPasseggero = parseInt( prompt("iniserisci l'età del passeggero"));
console.log("eta passeggero: " + etàPasseggero);

                                   //2) moltiplicare i kilometri dichirati dal passeggero per 0.21euro al km

const priceForKm = (kmDaSvolgere * 0.21);
console.log( 'prezzo moltiplicato per 0.21 euro ' + priceForKm);

                                   //3)if il passeggero è minorenne fai lo sconto del 20% al prezzo totale calcolato con la moltiplicazione altrimenti prezzo senza sconto

if (etàPasseggero < 18) {
  const  sconto= ((priceForKm * 20) / 100);
  const priceTotale = (priceForKm - sconto).toFixed(2)
  

  //lascio console.log nel codice per vedere nell'inspector cosa succede
  console.log( 'totale prezzo da sottrarre come sconto' + sconto)

  //per visualizzarlo a schermo
  document.getElementById("Percentuale").innerHTML = "il prezzo totale, con il 20% di sconto è: ";
    
  document.getElementById("Price").innerHTML = priceTotale + " Euro";


                                    //4)if il passeggeo ha più di 65 anni fai losconto del 40% al prezzo calcolato con la moltiplicazione altrimeti prezzo senza sconto

} else if (etàPasseggero > 65) {
  const  sconto= ((priceForKm * 40) / 100);
  const priceTotale = (priceForKm - sconto).toFixed(2);

  //lascio console.log nel codice per vedere nell'inspector cosa succede
  console.log( 'totale prezzo da sottrarre come sconto' + sconto)
 

  //per visualizzarlo a schermo
  document.getElementById("Percentuale").innerHTML = "il prezzo totale, con il 40% di sconto è: ";
    
  document.getElementById("Price").innerHTML = priceTotale + " Euro";



                                    //5)scrivi il prezzo totale senza sconto

} else {
  //lascio console.log nel codice per vedere nell'inspector cosa succede
  console.log(priceForKm);

  //per visualizzarlo a schermo
  document.getElementById("Percentuale").innerHTML = "il prezzo totale, senza sconto è: ";
    
  document.getElementById("Price").innerHTML = priceForKm + " Euro";
}
