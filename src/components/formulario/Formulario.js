import React, { useContext, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Grid, Box, Typography, FormControl, InputLabel, MenuItem, makeStyles, IconButton } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Divider from '@material-ui/core/Divider';
import { Select, TextField } from 'formik-material-ui';
import DeleteIcon from '@material-ui/icons/Delete';
import FormContext from '../../context/formContext/FormContext';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
    },
    contenedor: {
        marginTop: '2%',
        marginBottom: '2%'
    },
    divider: {
        width: '100%',
        marginTop: '1%',
        marginBottom: '1%'
    }
}));


const Formulario = () => {
    const classes = useStyles();
    const formContext = useContext(FormContext);
    const { connectionList,getConnections } = formContext;

    useEffect(() => {
        getConnections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={{
                    title: '',
                    code: '',
                    connection: '',
                    query: '',
                    paramList: [],
                    paramName: '',
                    paramType: 'String',
                    paramDefaultValue: ''
                }}
                validate={values => {
                    let errors = {};

                    return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);

                    setTimeout(() => {
                        alert('guardado')
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
                            <Grid container className={classes.contenedor} spacing={2}>
                                <Grid item xs={4} md={4} lg={4}>
                                    <Field className={classes.grid} component={TextField} name="title" variant="outlined" type="text" label="Title" placeholder="Title" />
                                </Grid>
                                <Grid item xs={4} md={4} lg={4}>
                                    <Field className={classes.grid} component={TextField} name="code" variant="outlined" type="text" label="Code" placeholder="Code" />
                                </Grid>
                                <Grid item xs={4} md={4} lg={4}>
                                    <FormControl className={classes.grid} variant="outlined">
                                        <InputLabel htmlFor="connection-simple">Connection</InputLabel>
                                        <Field
                                            component={Select}
                                            name="connection"
                                            inputProps={{
                                                id: 'connection-simple',
                                            }}
                                        >
                                            {connectionList.length > 0 && connectionList.map(elem => (
                                                <MenuItem key={elem.id} value={elem.id}>{elem.title}</MenuItem>
                                            ))
                                            }
                                        </Field>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid container className={classes.contenedor}>
                                <Grid item xs={12} md={12} lg={12}>
                                    <Typography variant='h6'>
                                        Query
                                    </Typography>
                                    <Field className={classes.grid} name="query" component="textarea" rows="5" label="Query" placeholder="" />
                                </Grid>
                            </Grid>

                            <Grid container className={classes.contenedor}>
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

                                <Divider className={classes.divider} />

                                <Grid container className={classes.contenedor} spacing={2}>
                                    <Grid item xs={1}>

                                    </Grid>
                                    <Grid item xs={3} md={3} lg={3}>
                                        <Field className={classes.grid} component={TextField} name="paramname" type="text" label="Title" placeholder="Title" />
                                    </Grid>
                                    <Grid item xs={3} md={3} lg={3}>
                                        <FormControl className={classes.grid}>
                                            <InputLabel htmlFor="paramType-simple">ParamType</InputLabel>
                                            <Field
                                                component={Select}
                                                name="paramType"
                                                inputProps={{
                                                    id: 'paramType-simple',
                                                }}
                                            >
                                                <MenuItem value={'String'}>String</MenuItem>
                                                <MenuItem value={'Integer'}>Integer</MenuItem>
                                                <MenuItem value={'date'}>date</MenuItem>
                                            </Field>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3} md={3} lg={3}>
                                        <Field className={classes.grid} component={TextField} name="paramDefaultValue" type="text" label="Code" placeholder="Code" />
                                    </Grid>
                                    <Grid item xs={1} md={1} lg={1}>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={1}>

                                    </Grid>
                                </Grid>

                                <Divider className={classes.divider} />

                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>


                            <Grid container justifyContent='flex-end' className={classes.contenedor}>
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