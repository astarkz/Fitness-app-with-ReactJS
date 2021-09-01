import React from 'react';

import ReactDOM from 'react-dom';

//Se crea un usuario
const user={
  firstName:'Camilo',
  lastName:'Aristizabal',
  avatar: 'https://blog.teachlr.com/wp-content/uploads/2016/06/hero-avatar.png'
}

//Metodo para llamar al usuario
function getName(user){

  return `${user.firstName} ${user.lastName}`;
}

//Metodo para saber si hay usuario o no

function getGreeting(user){

  if(user){

    return <h1> Holaa {getName(user)}</h1>;
  }
  else{

    return <h1>Hola extraño</h1>;
  }
}


//Se pueden llamar funciones dentro de las etiquetas
const element = (

  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}></img>

  </div>

)
const container = document.getElementById('root');

//al react dom se le pasa primero lo que se va a renderizar, y luego donde lo hará
//ReactDOM.render(_queVaArenderizar, DondeLoHara)

ReactDOM.render(element,container)


