import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Grid, Box, Typography, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Divider from '@material-ui/core/Divider';
import { Select } from 'formik-material-ui';

const Formulario = () => {

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={{
                    title: '',
                    code: 'Autocomplete',
                    connection: 1,
                    query: '',
                    paramList: [],
                    paramName: '',
                    paramType: '',
                    paramDefaultValue: ''
                }}
                validate={values => {
                    let errors = {};

                    if (!values.file) {
                        errors.file = 'Requerido';
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
                    <Box m={2}>
                        <Form>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="h4" gutterBottom>
                                        New DataSource
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={4} md={4} lg={4}>
                                    <Field name="title" type="text" label="Title" placeholder="Title" />
                                </Grid>
                                <Grid item xs={4} md={4} lg={4}>
                                    <Field name="code" type="text" label="Code" placeholder="Code" />
                                </Grid>
                                <Grid item xs={4} md={4} lg={4}>
                                    <FormControl>
                                        <InputLabel htmlFor="connection-simple">connection</InputLabel>
                                        <Field
                                            component={Select}
                                            name="connection"
                                            inputProps={{
                                                id: 'connection-simple',
                                            }}
                                        >
                                            <MenuItem value={'String'}>String</MenuItem>
                                            <MenuItem value={'Integer'}>Integer</MenuItem>
                                            <MenuItem value={'date'}>date</MenuItem>
                                        </Field>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={12} lg={12}>
                                    <Field name="query" component="textarea" rows="4" label="Query" placeholder="" />
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid item xs={2}>
                                    <Typography variant="h6" gutterBottom>
                                        Parameters
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button
                                        variant="contained"
                                        color="default"
                                        disabled={isSubmitting}
                                        onClick={() => console.log('add')}
                                    >
                                        Add Parameter
                                    </Button>
                                </Grid>

                                <Divider />

                                <Grid container spacing={2}>
                                    <Grid item xs={4} md={4} lg={4}>
                                        <Field name="paramname" type="text" label="Title" placeholder="Title" />
                                    </Grid>
                                    <Grid item xs={4} md={4} lg={4}>
                                        <FormControl>
                                            <InputLabel htmlFor="paramtype-simple">paramtype</InputLabel>
                                            <Field
                                                component={Select}
                                                name="paramtype"
                                                inputProps={{
                                                    id: 'paramtype-simple',
                                                }}
                                            >
                                                <MenuItem value={'String'}>String</MenuItem>
                                                <MenuItem value={'Integer'}>Integer</MenuItem>
                                                <MenuItem value={'date'}>date</MenuItem>
                                            </Field>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} md={4} lg={4}>
                                        <Field name="paramDefaultValue" type="text" label="Code" placeholder="Code" />
                                    </Grid>
                                </Grid>

                                <Divider />

                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>


                            <Grid item container justifyContent='flex-end' xs={12} md={12} lg={12} spacing={2}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Form>
                    </Box>
                )}
            </Formik>
        </MuiPickersUtilsProvider>
    );
};

export default Formulario;