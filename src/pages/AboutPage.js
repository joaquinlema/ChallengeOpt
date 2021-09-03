import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import CardAbout from '../components/about/CardAbout';

const About = () => {

    // eslint-disable-next-line no-unused-vars
    const dataAbout = [
        {
            titulo: 'React JS',
            descripcion: 'Utilizado para manejo de Ui en Front End',
            image: require('../img/react.png')
        },
        {
            titulo: 'React Context API',
            descripcion: 'Utilizado para manejo de estados en Front End',
            image: require('../img/contextApi.png')
        },
        {
            titulo: 'Axios',
            descripcion: 'Utilizado para manejo de estados en Front End',
            image: require('../img/axios.jpg')
        },
        {
            titulo: 'Formik',
            descripcion: 'Utilizado para formulararios en Front End',
            image: require('../img/formik.png')
        },
        {
            titulo: 'GitHUB',
            descripcion: 'Utilizado para control de versiones',
            image: require('../img/github.png')
        },
        {
            titulo: 'Material UI',
            descripcion: 'Utilizado para componentes visuales Front End',
            image: require('../img/material.png')
        },
        {
            titulo: 'Mui Datatable',
            descripcion: 'Utilizado para componentes visuales Front End',
            image: require('../img/muidata.png')
        },
        {
            titulo: 'React Router Dom',
            descripcion: 'Utilizado para componentes visuales Front End',
            image: require('../img/reactrouter.jpg')
        }
    ]

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
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