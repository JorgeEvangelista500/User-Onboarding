import React  from "react";

function Member({details}){
    return(
        <div>
            <h2>{details.first_name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
        </div>


    )
}
export default Member