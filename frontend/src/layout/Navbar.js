import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    linkText: {
        textDecoration: 'none',
        width: 'auto',
        textTransform: 'uppercase',
        fontSize: '18px',
        color: 'white'
    },
    navbarDisplayFlex: {
        display: 'flex',
        justifyContent: 'space-around',
    },

}));

export default function ButtonAppBar() {
    const classes = useStyles();

    //No User --> Login, Home, Contact Us
    //Admin --> Users, Contact Us, Home
    //
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.navbarDisplayFlex}>
                    <IconButton component={Link} to="/" className={classes.linkText} edge="start" color="inherit" aria-label="Home">
                        <HomeIcon fontSize="large"/>
                    </IconButton>
                    <div>
                        <Button component={Link} to="/users" className={classes.linkText} color="inherit">Users</Button>
                        <Button component={Link} to="/signUp" className={classes.linkText} color="inherit">Sign Up</Button>
                        <Button component={Link} to="/github" className={classes.linkText} color="inherit">Contact Us</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
