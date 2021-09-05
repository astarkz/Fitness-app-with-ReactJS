import React from 'react'
import './Styles/Welcome.css'


function Welcome(props){

    return(

        <div className="container">
            <div   className="Fitness-User-Info">   
                <h1>Hello {props.userName}</h1>
                <p>Let´s workout to get some gains!</p>
            </div>
        </div>

    )

}

export default Welcome