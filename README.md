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


