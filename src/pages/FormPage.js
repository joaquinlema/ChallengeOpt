import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Formulario from '../components/formulario/Formulario';
import Mensaje from '../components/userMsj/Mensaje';
import FormContext from '../context/formContext/FormContext';

const FormularioPage = () => {

    let history = useHistory();
    const formContext = useContext(FormContext);
    const { save, snackmsj,snackStatus,snackSeverity, onCloseSnack } = formContext;

    if (save) {
        history.push('/');
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Formulario />
            </Grid>
            <Grid item>
                <Mensaje open={snackStatus} onClose={onCloseSnack} severity={snackSeverity} msj={snackmsj} />
            </Grid>
        </Grid>
    );
};

export default FormularioPage;