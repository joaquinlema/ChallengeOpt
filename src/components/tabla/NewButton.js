import React from 'react';
import { Button } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

const NewButton = () => {
    return (
        <Button
            variant="contained"
            color="primary"
            endIcon={<AddCircleOutlineRoundedIcon />}
        >
            New
        </Button>
    );
}

export default NewButton;
