import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorder from '@material-ui/icons/StarBorder';

function MethodType({categoryPath, method, onMethodClick, styleClasses}) {
    const onClick = () => {
        onMethodClick({categoryPath, method});
    }
    return (
        <ListItem button className={styleClasses.nested} onClick={onClick}>
            <ListItemIcon>
            <StarBorder />
            </ListItemIcon>
            <ListItemText primary={method.name} />
        </ListItem>
    );
}

/*
function chooseMethod(methodName) {
    switch(methodName) {
        case "Newton's Method":
            return <p> </p>
        case 'Bisection':
            return <p> </p>
        default:
            return <></>
    }
}
*/

export default MethodType;


/*

        <div id={methodName}>
            <Button variant="contained" color="primary">
                {methodName}
            </Button>
        </div>
    */