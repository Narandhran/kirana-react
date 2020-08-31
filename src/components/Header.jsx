import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    typographyStyle: {
        flex: 1
    }
}));
const Header = () => {
    const classes = useStyles();
    return <AppBar>
        <Toolbar>
            <Typography className={classes.typographyStyle}>
                Get2Basket
            </Typography>
            <ShoppingCartIcon/>
        </Toolbar>
    </AppBar>
}

export default Header;
