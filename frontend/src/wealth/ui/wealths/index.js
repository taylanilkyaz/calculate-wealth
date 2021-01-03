import React from "react";
import { WealthCard } from "../card";
import { useWealthsController } from "../../controllers/use-wealths-controller";
import { useAddWealthController } from "../../controllers/use-add-wealth-controller";
import { WealthForm } from "../form";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 240,
    height: 320,
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  media: {
    height: 140,
  },
  footerButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  avatar: {
    color: "white",
    backgroundColor: "orange",
    width: theme.spacing(10),
    height: theme.spacing(10),
    fontSize: 30,
    margin: "auto",
    textTransform: "upperCase",
  },
}));

export const Wealths = () => {

  const classes = useStyles();

  const { wealths, deleteWealth, openDialog, closeDialog, isOpen } = useWealthsController();
  const { wealthState, changeHandler, addWealth } = useAddWealthController();

  return (
    <div>
      <Grid container style={{ padding: 24, display: "flex", justifyContent: "center" }}>

        {wealths.map((wealth) => (
          <Grid key={wealth.id} style={{ margin: 15 }}>
            <WealthCard
              id={wealth.id}
              unit={wealth.unit}
              amount={wealth.amount}
              deleteWealth={deleteWealth}
            />
          </Grid>
        ))}

        <div>
          <Card className={classes.root}>
            <CardActions className={classes.footerButtons}>
              <Button
                size="medium"
                variant="outlined"
                color="primary"
                style={{ width: "40%" }}
                onClick={openDialog}>
                Add
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
              onSubmitWealth={addWealth} />

          </Dialog>
        </div>

      </Grid>
    </div>
  );
};
