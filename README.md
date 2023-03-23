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
  - creare un button "invia" e creare un eventlistener che al "click"  invierá i dati forniti dall'utente
  - tramite una condizione e attraverso un metodo per gli array, controllare se il nome inserito dal nostro utente sia presente nella lista array e generare una risposta adeguata.
