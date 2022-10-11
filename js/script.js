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


if(etaPass <= 18){
    costoIntero - (costoIntero*0.2)
}else if(etaPass >= 65){
    costoIntero - (costoIntero*0.4)
}else{
    costoIntero
};


document.getElementById('output').innerHTML = `
    il costo del  biglietto è ${costoIntero.toFixed(2)}€ 
`
document.getElementById('age').innerHTML = `
    La tua eta' ${etaPass}anni.
`
document.getElementById('km').innerHTML = `
    Distanza raggiungibile con il tuo ticket ${kmPass.toFixed(2)}Km.
`