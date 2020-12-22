import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    media: {
        height: 140,
    },
    footerButtons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    avatar: {
        color: 'white',
        backgroundColor: 'orange',
        width: theme.spacing(10),
        height: theme.spacing(10),
        fontSize: 30,
        margin: 'auto',
        textTransform: 'upperCase'

    },
}));

const UserCard = ({ id, firstName, lastName, email, password, deleteUser }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Avatar className={classes.avatar}>{firstName.charAt(0)}{lastName.charAt(0)} </Avatar>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: 'capitalize' }}>
                        {firstName} {lastName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.footerButtons}>
                <Button onClick={(e) => deleteUser(e, id)} size="medium" variant="outlined" color="secondary" style={{ width: '40%' }}>
                    Delete
        </Button>
                <Button component={Link} to={`edit/${id}`} size="medium" variant="outlined" color="primary" style={{ width: '40%' }} >
                    Edit
        </Button>
            </CardActions>
        </Card>
    );
}

export default UserCard;