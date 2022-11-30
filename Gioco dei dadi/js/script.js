// PROBLEMA:Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1- Genera un numero casuale per il giocatore

numero_giocatore = Math.floor(Math.random() * 6) +1;

// 2- Genera un numero casuale per il computer

numero_computer = Math.floor(Math.random() * 6) +1;

// 3- Controllare il valore più alto
//     3.1-SE il giocatore ha il numero più alto vince e mostrare in console.log
//     3.2-SE il computer ha il numero più alto vince e mostrare in console.log
//     3.3-ALTRIMENTI se il giocatore e il computer hanno lo stesso numero è un pareggio e mostrare in console.log

console.log(`il numero del giocatore è ${numero_giocatore}`)
console.log(`il numero del computer è ${numero_computer}`)


if(numero_giocatore > numero_computer){
    console.log(`il giocatore ha vinto`)
}

else if(numero_computer > numero_giocatore){
    console.log(`il computer ha vinto`)
}

else{
    console.log(`pareggio`)
}