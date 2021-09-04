import React, { useContext } from 'react'
import MUIDataTable from "mui-datatables";
import { Grid } from '@material-ui/core';
import HomeContext from '../../context/homeContext/HomeContext';
import CustomToolBar from './CustomToolBar';

const options = {
    customToolbar: () => {
        return (
            <CustomToolBar />
        );
    },
    setRowProps: (row, dataIndex, rowIndex) => {
        let styleRow = (rowIndex % 2 === 0) ? { backgroundColor: 'whitesmoke' } : { backgroundColor : 'white' };
        return {
          style: styleRow,
        };
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

export default function DataSourceTable() {

    const homeContext = useContext(HomeContext);
    const { dataSourceList, connectionsList } = homeContext;

    const columns = [
        {
            name: "title",
            label: "Name",
            options: {
                filter: false,
                sort: false,
                setCellHeaderProps: value => ({ style: { fontSize: 'larger', fontWeight: 700 } }),
            }
        },
        {
            name: "code",
            label: "Code",
            options: {
                filter: false,
                sort: false,
                setCellHeaderProps: value => ({ style: { fontSize: 'larger', fontWeight: 600 } }),
            }
        },
        {
            name: "connection_id",
            label: "Connection",
            options: {
                filter: false,
                sort: false,
                setCellHeaderProps: value => ({ style: { fontSize: 'larger', fontWeight: 600 } }),
                customBodyRender: (value, tableMeta, updateValue) => {
                    const connection = connectionsList.filter(elem => elem.id === value);
                    const connectionTitle = (!connection[0]) ? '' : connection[0].title;
                    return (
                        <span>{connectionTitle}</span>
                    )
                }
            }
        },
        // {
        //     name: "id",
        //     label: " ",
        //     options: {
        //         filter: false,
        //         sort: false,
        //         setCellProps: () => ({ style: { fontSize: 'larger', fontWeight: 600, display: 'flex', justifyContent: 'right', flexDirection: 'row-reverse' } }),
        //         customBodyRender: (value, tableMeta, updateValue) => {
        //             return (
        //                 <IconButton aria-label="edit" onClick={() => alert(tableMeta.currentTableData, tableMeta.rowIndex)}>
        //                     <EditRoundedIcon fontSize="small" />
        //                 </IconButton>
        //             );
        //         }
        //     }
        // },
    ];

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
