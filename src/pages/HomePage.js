import React from 'react';
import { Grid } from '@material-ui/core';
import DataSourceTable from '../components/tabla/DataSourceTable';

const HomePage = () => {
    return (
        <Grid container>
            <Grid item style={{width:'100%', marginTop:'3%'}}>
                <DataSourceTable />
            </Grid>
        </Grid>
    );
}

export default HomePage;
