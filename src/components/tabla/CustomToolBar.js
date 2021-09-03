import React from "react";
import { withStyles } from "@material-ui/core/styles";
import NewButton from "./NewButton";

const defaultToolbarStyles = {
    iconButton: {
    },
};

const CustomToolbar = () => {

    return (
        <React.Fragment>
            <NewButton />
        </React.Fragment>
    );

}

export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(CustomToolbar);