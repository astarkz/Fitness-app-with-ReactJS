import React from 'react'

import ReactDOM from 'react-dom';
import Card from './Components/Card'


const container = document.getElementById('root');

//al react dom se le pasa primero lo que se va a renderizar, y luego donde lo hará
//ReactDOM.render(_queVaArenderizar, DondeLoHara)

ReactDOM.render(<Card/>,container)


