import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Divider from '@material-ui/core/Divider';

const Formulario = () => {    
    
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={{
                    title: '',
                    code: 'Autocomplete',
                    connection:'',
                    query: '',
                    paramName:'',
                    paramType:'',
                    paramDefaultValue:''
                }}
                validate={values => {
                    let errors = {};

                    if (!values.file) {
                        errors.file = 'Requerido';
                    }

                    if (!values.tipoDoc) {
                        errors.tipoDoc = 'Requerido';
                    }

                    if (!values.docType) {
                        errors.docType = 'Requerido';
                    }

                    if (!values.proceso) {
                        errors.proceso = 'Requerido';
                    }
                    
                    if (!values.seccionBaseDocumental) {
                        errors.seccionBaseDocumental = 'Requerido';
                    }

                    if (!values.idioma) {
                        errors.idioma = 'Requerido';
                    } 

                    if (!values.alcance) {
                        errors.alcance = 'Requerido';
                    }

                    if (!values.revision) {
                        errors.revision = 'Requerido';
                    } else if (
                        !/^\d+$/i.test(values.revision)
                    ) {
                        errors.revision = 'Revision Invalido solo numeros';
                    }

                    if (!values.numeracionCorrelativa) {
                        errors.numeracionCorrelativa = 'Requerido';
                    } else if (
                        !/^\d+$/i.test(values.numeracionCorrelativa)
                    ) {
                        errors.numeracionCorrelativa = 'Numeracion Correlativa Invalido solo numeros';
                    }

                    if (!values.nombre) {
                        errors.nombre = 'Requerido';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        resetForm();
                    }, 500);
                }} 
            >
                {({ submitForm, isSubmitting, errors, touched, resetForm, setFieldValue }) => (
                    <Form >
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} lg={12}>
                                <Field disabled name="nombre" type="text" label="Name (Autocomplete)" placeholder="Nombre"  />
                            </Grid>


                            <Grid item xs={12} md={12} lg={12}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>


                            <Grid item container xs={12} md={12} lg={12} spacing={2}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
                                    Submit
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    disabled={isSubmitting}
                                    onClick={() => { resetForm();}}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </MuiPickersUtilsProvider>
    );
};

export default Formulario;