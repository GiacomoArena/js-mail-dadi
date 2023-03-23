const nome = document.getElementById('nome');
const button = document.getElementById('button');
const winner = document.getElementById('winner');
const dadoUser = ["1","2","3","4","5","6"];

const dadoPc = ["1","2","3","4","5","6"];

button.addEventListener('click', function(){
  const resultUser =  Math.floor(Math.random() * dadoUser.length );
  const output = document.getElementById('val-user');
  output.innerHTML = nome.value + " " + "il tuo dado é :" + " " + dadoUser[resultUser];
  
  console.log(dadoUser);

  const resultPc =  Math.floor(Math.random() * dadoPc.length );
  const outputPc = document.getElementById('output');
  outputPc.innerHTML ="Il dado del tuo avversario:" + " " +  dadoPc[resultPc];

  if( resultUser > resultPc){
    winner.innerHTML = `
    Complimenti ${nome.value} hai vinto!
    `;
  }
  else if(resultUser < resultPc){
    winner.innerHTML = `
    Mi spiace ${nome.value} ma il PC ha avuto la meglio, ritenta se vuoi.
    `;
  }
  else{
    winner.innerHTML = `
    Hai pareggiato!!!
    `;
  }
})
