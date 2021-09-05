import React from 'react'

import ReactDOM from 'react-dom';
import Card from './Components/Card'
import 'bootstrap/dist/css/bootstrap.css'
import Welcome from './Components/Welcome';


const container = document.getElementById('root');

//al react dom se le pasa primero lo que se va a renderizar, y luego donde lo hará
//ReactDOM.render(_queVaArenderizar, DondeLoHara)

ReactDOM.render(<div>
                <Welcome
                    userName="Camilo"
                />
                <Card
                title="Techniques guides"
                description="Learn amazing street workout and calisthenics"
                img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                leftColor="#A74CF2"
                rightColor="#617BFB"
    
            />


                </div>
, container)


