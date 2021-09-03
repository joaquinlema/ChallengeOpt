import React, { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import DataSourceTable from '../components/tabla/DataSourceTable';
import HomeContext from '../context/homeContext/HomeContext';
import Mensaje from '../components/userMsj/Mensaje';

const HomePage = () => {

    const homeContext = useContext(HomeContext);
    const {setLoading,getDataSources, snackStatus,snackmsj,snackSeverity,onCloseSnack } = homeContext;

    useEffect(() => {
        setLoading();
        getDataSources();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grid container>
            <Grid item style={{width:'100%', marginTop:'3%'}}>
                <DataSourceTable />
            </Grid>

            <Grid item>
                <Mensaje open={snackStatus} onClose={onCloseSnack} severity={snackSeverity} msj={snackmsj} />
            </Grid>
        </Grid>
    );
}

export default HomePage;
