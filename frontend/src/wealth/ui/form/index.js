import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const WealthForm = ({
  unit,
  amount,
  changeHandler,
  onSubmitWealth,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <Grid container>
              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-filled-label">Unit</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={unit}
                  name="unit"
                  onChange={(e) => changeHandler(e)}
                  style={{ width: 250, marginBottom: 20 }}
                >
                  <MenuItem value={"DOLAR"}>Dolar</MenuItem>
                  <MenuItem value={"EURO"}>Euro</MenuItem>
                  <MenuItem value={"GOLD"}>GOLD</MenuItem>
                  <MenuItem value={"POUND"}>POUND</MenuItem>
                  <MenuItem value={"TURKISHLIRA"}>TL</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="amount"
                  label="Amount"
                  name="amount"
                  value={amount}
                  autoComplete="amount"
                  onChange={(e) => changeHandler(e)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => {onSubmitWealth(e)}}
            >
              Save
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};