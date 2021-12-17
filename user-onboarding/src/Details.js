import React  from "react";
import './App.css';

function Member({details}){
    return(
        <div className='membercard' >
            <h2>{details.first_name}</h2>
            <p>Email: {details.email}</p>
            <img src= {details.avatar} alt="avatar" />
        </div>


    )
}
export default Member