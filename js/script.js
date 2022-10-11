/*          Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.     */

const costoKm = 0.21;
const etaPass = parseInt(prompt('Che eta hai?'));
const kmPass = parseInt(prompt('Quanti Km vuoi fare'));

const costoIntero = (costoKm * kmPass);

// console.log(etaPass, kmPass, costoIntero);

if(etaPass <= 18){
    console.log(costoIntero - (costoIntero*0.2))
}else if(etaPass >= 65){
    console.log(costoIntero - (costoIntero*0.4))
}else{
    console.log(costoIntero)
};
