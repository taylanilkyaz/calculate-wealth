import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import { DialogVariable } from "../../../util";

import { useCalculateWealthController } from "../../controllers/use-calculate-wealth-controller";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: '5px'
    },
}));

export const CalculateModal = ({ wealth }) => {

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    const { calculateWealth } = useCalculateWealthController();
    const { openDialog, closeDialog, isOpen } = DialogVariable();

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Result</h2>
            <p>Type : {wealth.unit}</p>
            <p>Amount : {wealth.amount}</p>
            <p>Currency : {10}</p>
            <p>Total : {calculateWealth(wealth)}</p>
        </div>
    );

    return (
        <div>
            <Button
                onClick={openDialog}
                size="medium"
                color="green"
                variant="outlined"
                style={{ width: "60%" }}
            >
                Calculate
        </Button>
            <Modal
                open={isOpen}
                onClose={closeDialog}
                aria-labelledby="simple-modal-title"
            >
                {body}
            </Modal>
        </div>
    );
}