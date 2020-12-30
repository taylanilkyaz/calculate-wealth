import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import UserContext from "../../../context";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '93vh',
    },
}));

export const Homepage = () => {
    const classes = useStyles();
    const { userData } = useContext(UserContext);

    return (
        <Grid container component="main" className={classes.root}>
            {userData.user ? (
                <h1>Welcome {userData.user.firstName}</h1>
            ) : (
                    <>
                        <h2>You are not logged in</h2>
                    </>
                )}
            <CssBaseline />
        </Grid>
    );
}