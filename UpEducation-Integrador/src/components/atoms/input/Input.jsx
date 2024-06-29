import React from "react";

function Input({tipo, nombre}) {
    return ( 
    <>
    <input type={tipo} placeholder={nombre}/>
    </>
    );
}

export default Input;