js-mail-dadi
===
## **Mail**
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

## **Gioco dei dadi**
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.


## **Mail**  passaggi:
-  chiedere la mail all'utente con un
```<input type="email">``` 
  e salvare il valore in una variabile. 
  ```
  const email = document.getElementById('email');
  ```
  .
  - creare un array contenente le email della lista di chi puó accedere 

  ```
  const arrayMail = [
  "giacomo@gmail.com",
  "giacomo@hotmail.com",
  "giacomo@aruba.com",
  "giacomo@hotmail.it",
  "giacomo@outlook.com"
];
  ```
  .
  - creare un button "invia" e creare un eventlistener che al "click"  invierá i dati forniti dall'utente

  - tramite una condizione e attraverso un metodo per gli array, controllare se il nome inserito dal nostro utente sia presente nella lista array e generare una risposta adeguata.

   ```
   .
 if(arrayMail.includes(email.value)){
    const message = h1.innerHTML = `Il controllo della mail é andato a buon fine. <br>
    Esito Positivo ${email.value}
    `;
    console.log('questo metodo é giusto, continua cosí', email.value);
  }else{
    const message = h1.innerHTML =`
    Il controllo della email non é andato a buon fine. <br>
    Esito negativo mi spiace ${email.value} ritenta con un'altra email
    `

    console.log('hai sbagliato tutto', email);
  }.com"
];
  ```
  .
  - creare un elemento h1 per inserire le varie risposte e tramite .append inserirlo nel container e creare un ""button""  che abbia lo scopo di ""cancellare""

 ```
 const h1 = document.createElement('h1')

const section = document.querySelector('section');



const email = document.getElementById('email');

const buttonInvia = document.getElementById('btn');
const buttonCanc = document.getElementById('annulla');
];
  ```
 button ""annulla""
 ```
 buttonCanc.addEventListener('click', function(){
  email.value = " ";
  section.removeChild(h1);
})
  ```


## **Dadi**  passaggi:
-  con un input text chiedere il nome del user e salvarlo in una variabile.
- creo due array (per l'utente e per il pc) che abbiano un valore da 1 a 6   

```
const dadoUser = ["1","2","3","4","5","6"];

const dadoPc = ["1","2","3","4","5","6"];

```
.
- creo il button con l'evenlistener che al click mi dia un estrazione casuale del valore del mio arrayuser e del mio arraypc con allegato una stringa che identifichi il valore di user e pc
```
button.addEventListener('click', function(){
  const resultUser =  Math.floor(Math.random() * dadoUser.length );
  const output = document.getElementById('val-user');
  output.innerHTML ="il tuo dado:" + " " + dadoUser[resultUser];
  
  console.log(dadoUser);

  const resultPc =  Math.floor(Math.random() * dadoPc.length );
  const outputPc = document.getElementById('output');
  outputPc.innerHTML ="Il dado del tuo avversario:" + " " +  dadoPc[resultPc];

  
})
```
.

- tramite una condizione stabilire il vincitore e stampare il risultato a schermo
```

  if( resultUser > resultPc){
    winner.innerHTML = `
    Complimenti ${nome.value} hai vinto!
    `;
  }
  else{
    winner.innerHTML = `
    Mi spiace ${nome.value} ma il PC ha avuto la meglio, ritenta se vuoi.
    `;
  }
  ```



