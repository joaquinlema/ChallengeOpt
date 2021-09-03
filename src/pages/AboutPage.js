import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import CardAbout from '../components/about/CardAbout';
import reactlogo from '../img/react.png';
import contextApiLogo from '../img/contextApi.png';
import axios from '../img/axios.jpg';
import formiklogo from '../img/formik.png';
import gitlogo from'../img/github.png'
import matlogo from'../img/material.png'
import muilogo from'../img/muidata.png'
import routerlogo from'../img/reactrouter.jpg'

const About = () => {

    const dataAbout = [
        {
            titulo: 'React JS',
            descripcion: 'Utilizado para manejo de Ui en Front End',
            image: reactlogo
        },
        {
            titulo: 'React Context API',
            descripcion: 'Utilizado para manejo de estados en Front End',
            image: contextApiLogo
        },
        {
            titulo: 'Axios',
            descripcion: 'Utilizado para manejo de estados en Front End',
            image: axios
        },
        {
            titulo: 'Formik',
            descripcion: 'Utilizado para formulararios en Front End',
            image: formiklogo
        },
        {
            titulo: 'GitHUB',
            descripcion: 'Utilizado para control de versiones',
            image: gitlogo
        },
        {
            titulo: 'Material UI',
            descripcion: 'Utilizado para componentes visuales Front End',
            image: matlogo
        },
        {
            titulo: 'Mui Datatable',
            descripcion: 'Utilizado para componentes visuales Front End',
            image: muilogo
        },
        {
            titulo: 'React Router Dom',
            descripcion: 'Utilizado para componentes visuales Front End',
            image: routerlogo
        }
    ]

    return (
        <Grid container spacing={2} style={{marginTop:'3%'}}>
            <Grid item xs={12}>
                <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                    About This App
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    A continuacion hacemos un detalle de los distintos componente y tecnologias que utilizamos para desarrollar esta solucion.
                </Typography>
            </Grid>
            {dataAbout.map((elem, index) =>
                <Grid key={index} item xs={3}>
                    <CardAbout titulo={elem.titulo} descripcion={elem.descripcion} image={elem.image} />
                </Grid>
            )}
        </Grid>
    )
}

export default About