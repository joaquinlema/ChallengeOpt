import React from 'react';
import { Button } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { Link } from 'react-router-dom';

const NewButton = () => {
    return (
        <Link to="/new-datasource" style={{'textDecoration':'none'}}>
        <Button
            variant="contained"
            color="primary"
            endIcon={<AddCircleOutlineRoundedIcon />}
        >
            New
        </Button>
        </Link>
    );
}

export default NewButton;
