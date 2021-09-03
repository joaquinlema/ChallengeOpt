import React, { useContext } from 'react'
import MUIDataTable from "mui-datatables";
import {Grid } from '@material-ui/core';
import HomeContext from '../../context/homeContext/HomeContext';
import CustomToolBar from './CustomToolBar';

const columns = [
    {
        name: "title",
        label: "Name",
        options: {
            filter: false,
            sort: true,
            setCellHeaderProps: value => ({ style: { fontSize: 'larger', fontWeight: 600 } }),
        }
    },
    {
        name: "code",
        label: "Code",
        options: {
            filter: false,
            sort: true,
            setCellHeaderProps: value => ({ style: { fontSize: 'larger', fontWeight: 600 } }),
        }
    },
    {
        name: "id",
        label: "Connection",
        options: {
            filter: false,
            sort: true,
            setCellHeaderProps: value => ({ style: { fontSize: 'larger', fontWeight: 600 } }),
            customBodyRender: (value, tableMeta, updateValue) => (
                <span>{value}</span>
            )
        }
    },
]


export default function DataSourceTable() {
    
    const homeContext = useContext(HomeContext);
    const { dataSourceList } = homeContext;
    const options = {
        customToolbar: () => {
            return (
              <CustomToolBar />
            );
          },
        selectableRows: 'none',
        download: false,
        print: false,
        filter: false,
        search: false,
        confirmFilters: false,
        viewColumns: false,
        pagination: true,
        enableNestedDataAccess: '.',
        // customToolbar: () => <CustomToolBar />,
    };

    return (
        <Grid item xs={12}>
            <MUIDataTable
                title={"DataSources"}
                data={dataSourceList}
                columns={columns}
                options={options}
            />
        </Grid>
    )
}
