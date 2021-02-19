import React from "react";
import MethodType from "./MethodType";

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

function Category({category}) {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <DoubleArrowIcon />
            </ListItemIcon>
            <ListItemText primary={<Box fontWeight="fontWeightBold">{category.name}</Box>} primaryTypographyProps={{'variant':'button'}}/>
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {
                    category.methods.map((method, i) => (
                        <MethodType key = {i} categoryPath={category.path} method={method} />
                    ))
                }
            </List>
        </Collapse>
        </>
    );
}

export default Category;