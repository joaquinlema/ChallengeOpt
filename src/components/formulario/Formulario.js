import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Button, LinearProgress, Grid, Box, Typography, FormControl, InputLabel, MenuItem, makeStyles, IconButton } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Divider from '@material-ui/core/Divider';
import { Select, TextField } from 'formik-material-ui';
import DeleteIcon from '@material-ui/icons/Delete';
import FormContext from '../../context/formContext/FormContext';
import HomeContext from '../../context/homeContext/HomeContext';

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
    const homeContext = useContext(HomeContext);
    const { connectionsList } = homeContext;
    const { initForm, saveDataSource, save } = formContext;
    const paramItem = {
        "name": "",
        "type": "string",
        "default_value": ""
    };
    const [params, setparams] = useState([paramItem]);

    useEffect(() => {
        initForm();
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
                    paramList: [{
                        "name": "",
                        "type": "string",
                        "default_value": ""
                    }],
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
                    let dataSourceSchema =
                    {
                        "title": values.title,
                        "code": values.code,
                        "connection_id": Number(values.connection),
                        "query": values.query,
                        "parameters": [
                            {
                                "name": "lookup",
                                "type": "string",
                                "default_value": "test"
                            }
                        ]
                    }
                    saveDataSource(dataSourceSchema);
                    setTimeout(() => {
                        setSubmitting(false);
                        if (save) resetForm();
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting, errors, touched, resetForm, setFieldValue, values }) => (
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
                                            {connectionsList.length > 0 && connectionsList.map(elem => (
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
                                    <FieldArray name="paramList">
                                        {({ insert, remove, push }) => (
                                            <div>
                                                {values.paramList.length > 0 &&
                                                    values.paramList.map((elem, index) => (
                                                        <div className="row" key={index}>
                                                            <div className="col">
                                                                <label htmlFor={`paramList.${index}.name`}>Title</label>
                                                                <Field
                                                                    name={`paramList.${index}.name`}
                                                                    placeholder="Jane Doe"
                                                                    type="text"
                                                                />
                                                                
                                                            </div>
                                                            <div className="col">
                                                                <label htmlFor={`paramList.${index}.default_value`}>Code</label>
                                                                <Field
                                                                    name={`paramList.${index}.default_value`}
                                                                    placeholder="jane@acme.com"
                                                                    type="text"
                                                                />
                                                
                                                            </div>
                                                            <div className="col">
                                                                <button
                                                                    type="button"
                                                                    className="secondary"
                                                                    onClick={() => remove(index)}
                                                                >
                                                                    X
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                <button
                                                    type="button"
                                                    className="secondary"
                                                    onClick={() => push({ name: '', email: '' })}
                                                >
                                                    Add Friend
                                                </button>
                                            </div>
                                        )}
                                    </FieldArray>
                                    {/* {params.length > 0 && params.map((item, index) => (
                                        <Fragment key={index}>
                                            <Grid item xs={1}>

                                            </Grid>
                                            <Grid item xs={3} md={3} lg={3}>
                                                <Field className={classes.grid} component={TextField} name="paramname" type="text" label="Title" placeholder="Title" />
                                            </Grid>
                                            <Grid item xs={3} md={3} lg={3}>
                                                <FormControl className={classes.grid}>
                                                    <InputLabel htmlFor="paramType-simple">Type</InputLabel>
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
                                        </Fragment>
                                    ))} */}

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