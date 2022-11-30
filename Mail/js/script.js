// PROBLEMA:Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.  Non utilizzare le funzioni indexOf o includes!

// 1-Crea una lista contenente le email di chi puo accedere al sito

const email = [`sbaizfilippo@gmail.com`, `marcobaroncini@gmail.com`, `alessiocrea@gmail.com`, `fabriziomastrobattista@gmail.com` ];

// 2-Permettere l'utente di inserire la propria mail con un prompt

let cerca = prompt(`inserisci l'email per accedere`);

// 3-tramite il for cerca nella lista delle email se quella che ha inserito l'utente sia presente
//     3.1-SE è presente mostro in cosole.log che è presente
//     3.2-ALTRIMENTI mostro in cosole.log che non è presente

let flag = false

for(let i=0; i<email.length; i++){

    if(email[i] == cerca){
        flag = true;
    }
}

if(flag == true){
    console.log(`L'email è presente nella lista `)
}

else{
    console.log(`L'email non è presente nella lista `)
}