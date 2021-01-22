import React, { memo } from "react";
import { WealthCard } from "../card";
import { useWealthsController } from "../../controllers/use-wealths-controller";
import { WealthForm } from "../form";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import { DialogVariable } from "../../../util";
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
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

export const Wealths = memo(() => {

  const classes = useStyles();

  const { wealths, deleteWealth, wealthState, changeHandler, addWealth, editWealth } = useWealthsController();
  const { openDialog, closeDialog, isOpen } = DialogVariable();

  return (
    <div>
      <Grid container style={{ padding: 24, display: "flex", justifyContent: "center" }}>

        {wealths.map((wealth) => (
          <Grid key={wealth.id} style={{ margin: 15 }}>
            <WealthCard
              wealth = {wealth}
              deleteWealth={deleteWealth}
              editWealth={editWealth}
            />
          </Grid>
        ))}

        <Card className={classes.root} style={{ margin: 15, background: '#989db912' }}>
          <CardActions className={classes.footerButtons}>
            <Button
              size="medium"
              variant="outlined"
              color="primary"
              style={{ width: "40%" }}
              onClick={openDialog}>
              <AddIcon />
            </Button>
          </CardActions>
        </Card>

        <Dialog
          open={isOpen}
          onClose={closeDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">

          <WealthForm
            unit={wealthState.unit}
            amount={wealthState.amount}
            changeHandler={changeHandler}
            onSubmitWealth={addWealth}
            closeDialog={closeDialog} />

        </Dialog>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            console.log(wealths);
          }}>
          Calculate
            </Button>
      </Grid>
    </div>
  );
});
