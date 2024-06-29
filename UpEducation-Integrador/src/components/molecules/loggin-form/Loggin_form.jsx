import React from "react";
import Input from "../../atoms/input/Input";
import Boton from "../../atoms/boton/Boton";
import Text from "../../atoms/parrafo/Text";
import Titulo from "../../atoms/titulo/Titulo";

function Loggin_form() {
    return (
        <>
            <Titulo/>
            <Text/>
            <Input nombre="Ingrese su nombre compa" tipo="text" />
            <Input nombre="Ingrese su contraseña compa" tipo="password"/>
            <Input nombre="Ingrese su numero de cel compa" tipo="number"/>
            <Boton/>
        </>
    );
}

export default Loggin_form;