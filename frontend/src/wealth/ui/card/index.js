import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useWealthsController } from "../../controllers/use-wealths-controller";
import Dialog from '@material-ui/core/Dialog';
import { WealthForm } from "../../ui/form";
import { DialogVariable } from "../../../util";
import { CalculateModal } from '../../ui/modal';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: 350,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  footerButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  avatar: {
    color: "white",
    backgroundColor: "#989db9",
    width: theme.spacing(10),
    height: theme.spacing(10),
    fontSize: 30,
    margin: "auto",
    textTransform: "upperCase",
  },
}));

export const WealthCard = ({
  wealth,
  deleteWealth,
  editWealth
}) => {
  const classes = useStyles();

  const { openDialog, closeDialog, isOpen } = DialogVariable();
  const { wealthState, changeHandler } = useWealthsController(wealth.id, wealth.unit, wealth.amount);


  const renderSwitch = (param) => {
    switch (param) {
      case 'DOLAR':
        return '$';
      case 'EURO':
        return '€';
      case 'TL':
        return '₺';
      case 'POUND':
        return '£';
      case 'GOLD':
        return 'AU';
      default:
        return '+';
    }
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Avatar className={classes.avatar}>
          {renderSwitch(wealth.unit)}
        </Avatar>

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ textTransform: "capitalize" }}
          >
            {wealth.unit}
          </Typography>
          <Typography gutterBottom variant="h6" component="h1">
            {wealth.amount}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem Ipsum
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.footerButtons}>
        <Button
          onClick={(e) => deleteWealth(e, wealth.id)}
          size="medium"
          variant="outlined"
          color="secondary"
          style={{ width: "40%" }}
        >
          Delete
        </Button>
        <Button
          onClick={openDialog}
          size="medium"
          variant="outlined"
          color="primary"
          style={{ width: "40%" }}
        >
          Edit
        </Button>

      </CardActions>

      <CalculateModal
        wealth={wealth}
      />


      <Dialog
        open={isOpen}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">

        <WealthForm
          unit={wealthState.unit}
          amount={wealthState.amount}
          changeHandler={changeHandler}
          onSubmitWealth={() => editWealth(wealth.id, wealthState)}
          closeDialog={closeDialog} />
      </Dialog>

    </Card>
  );
};
