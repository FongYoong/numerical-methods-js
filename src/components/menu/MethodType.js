import React from "react";
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import { makeStyles } from '@material-ui/core/styles';

// Styles
const useStyles = makeStyles((theme) => ({
    listItem: {
        paddingLeft: theme.spacing(4),
        transition: 'transform 0.2s',
        "&:hover": {
            '-ms-transform': 'scale(1.2)', /* IE 9 */
            '-webkit-transform': 'scale(1.2)', /* Safari 3-8 */
            'transform': 'scale(1.2)',
        },
    },
}));

function MethodType({categoryPath, method, onMethodClick}) {
    const styleClasses = useStyles();

    const onClick = () => {
        onMethodClick({categoryPath, method});
    }
    return (
        <ListItem button className={styleClasses.listItem} onClick={onClick}>
            <ListItemIcon>
            <FiberManualRecordOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={<Box fontWeight="fontWeightBold">{method.name}</Box>} primaryTypographyProps={{variant:'button'}}/>
        </ListItem>
    );
}

export default MethodType;