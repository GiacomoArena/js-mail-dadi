

const arrayMail = [
  "giacomo@gmail.com",
  "giacomo@hotmail.com",
  "giacomo@aruba.com",
  "giacomo@hotmail.it",
  "giacomo@outlook.com"
];
const h1 = document.createElement('h1')

const section = document.querySelector('section');



const email = document.getElementById('email');

const buttonInvia = document.getElementById('btn');
const buttonCanc = document.getElementById('annulla');

buttonInvia.addEventListener('click', function(){

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
  }

  section.appendChild(h1);
})

buttonCanc.addEventListener('click', function(){
  email.value = " ";
  section.removeChild(h1);
})