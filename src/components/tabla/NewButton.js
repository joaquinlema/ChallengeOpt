import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { Link } from 'react-router-dom';
import FormContext from '../../context/formContext/FormContext';

const NewButton = () => {
    const formContext = useContext(FormContext);
    const { getConnections } = formContext;
    return (
        <Link to="/new-datasource" style={{ 'textDecoration': 'none' }}>
            <Button
                variant="contained"
                color="primary"
                endIcon={<AddCircleOutlineRoundedIcon />}
                onClick={getConnections}
            >
                New
            </Button>
        </Link>
    );
}

export default NewButton;
