import React, { Fragment, useContext, useEffect } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Button, LinearProgress, Grid, Box, Typography, FormControl, InputLabel, MenuItem, makeStyles, IconButton, FormHelperText } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Divider from '@material-ui/core/Divider';
import { Select, TextField } from 'formik-material-ui';
import DeleteIcon from '@material-ui/icons/Delete';
import FormContext from '../../context/formContext/FormContext';
import HomeContext from '../../context/homeContext/HomeContext';
import SaveIcon from '@material-ui/icons/Save';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import * as Yup from "yup";

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
    },
    button: {
        margin: theme.spacing(1),
      },
}));


const Formulario = () => {
    const classes = useStyles();
    const formContext = useContext(FormContext);
    const homeContext = useContext(HomeContext);
    const { connectionsList } = homeContext;
    const { initForm, saveDataSource, save } = formContext;

    useEffect(() => {
        initForm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const SignupSchema = Yup.object().shape({
        title: Yup.string().min(1, 'Too Short!').max(70, 'Too Long!').required('Required'),
        code: Yup.string().min(1, 'Too Short!').max(70, 'Too Long!').required('Required'),
        connection: Yup.string().required('Required'),
        query: Yup.string().required('Required'),
        paramList: Yup.array()
        .of(
          Yup.object().shape({
            name: Yup.string().min(1, 'too short').required('Required'), 
            type: Yup.string().required('Required'), 
            default_value: Yup.string().min(1, 'too short').required('Required'),
          })
        ).required('Must have parameters').min(1, 'Minimum of 1 Parameter'),
    });

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
                        "type": '',
                        "default_value": ""
                    }],
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    let dataSourceSchema =
                    {
                        "title": values.title,
                        "code": values.code,
                        "connection_id": Number(values.connection),
                        "query": values.query,
                        "parameters": values.paramList
                    }
                    saveDataSource(dataSourceSchema);
                    setTimeout(() => {
                        setSubmitting(false);
                        if (save) resetForm();
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting, errors, touched, resetForm, setFieldValue, values, setValues }) => (
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
                                        <FormHelperText className='Mui-error'>{(errors.connection && touched.connection) && errors.connection}</FormHelperText >
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid container className={classes.contenedor}>
                                <Grid item xs={12} md={12} lg={12}>
                                    <Typography variant='h6'>
                                        Query
                                    </Typography>
                                    <Field className={classes.grid} name="query" component="textarea" rows="5" label="Query" placeholder="" aria-invalid={(errors.query)}/>
                                    <FormHelperText className='Mui-error'>{(errors.query && touched.query) && errors.query}</FormHelperText >

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
                                        startIcon={<AddCircleOutlineRoundedIcon />}
                                        onClick={() => {
                                            values.paramList.push({
                                                "name": "",
                                                "type": "",
                                                "default_value": ""
                                            }); setValues(values)
                                        }}
                                    >
                                        Add Parameter
                                    </Button>
                                </Grid>

                                <Divider className={classes.divider} />

                                <Grid container className={classes.contenedor} spacing={2}>
                                    <FieldArray name="paramList">
                                        {({ insert, remove, push }) => (
                                            <Fragment>
                                                {values.paramList.length > 0 &&
                                                    values.paramList.map((elem, index) => (
                                                        <Fragment key={index}>
                                                            <Grid item xs={1}>

                                                            </Grid>
                                                            <Grid item xs={3} md={3} lg={3}>
                                                                <Field className={classes.grid} component={TextField} name={`paramList.${index}.name`} type="text" label="Title" placeholder="Title" />
                                                            </Grid>
                                                            <Grid item xs={3} md={3} lg={3}>
                                                                <FormControl className={classes.grid}>
                                                                    <InputLabel htmlFor="type-simple">Type</InputLabel>
                                                                    <Field
                                                                        component={Select}
                                                                        name={`paramList[${index}].type`}
                                                                        inputProps={{
                                                                            id: 'type-simple',
                                                                        }}
                                                                    >
                                                                        <MenuItem value={'string'}>string</MenuItem>
                                                                        <MenuItem value={'integer'}>Integer</MenuItem>
                                                                        <MenuItem value={'date'}>date</MenuItem>
                                                                    </Field>
                                                                </FormControl>
                                                            </Grid>
                                                            <Grid item xs={3} md={3} lg={3}>
                                                                <Field className={classes.grid} component={TextField} name={`paramList.${index}.default_value`} type="text" label="Code" placeholder="Code" />
                                                            </Grid>
                                                            <Grid item xs={1} md={1} lg={1}>
                                                                <IconButton aria-label="delete" onClick={() => remove(index)}>
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                            </Grid>
                                                            <Grid item xs={1}>

                                                            </Grid>
                                                        </Fragment>
                                                    ))}
                                            </Fragment>
                                        )}
                                    </FieldArray>
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
                                    size="large"
                                    className={classes.button}
                                    startIcon={<SaveIcon />}
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
        </MuiPickersUtilsProvider >
    );
};

export default Formulario;