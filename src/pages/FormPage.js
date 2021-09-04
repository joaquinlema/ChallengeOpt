import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Formulario from '../components/formulario/Formulario';
import FormContext from '../context/formContext/FormContext';

const FormularioPage = () => {      
    
    let history = useHistory();
    const formContext = useContext(FormContext);
    const {save} = formContext;

    if(save){
        history.push('/');
    }

    return (
       <Formulario />
    );
};

export default FormularioPage;