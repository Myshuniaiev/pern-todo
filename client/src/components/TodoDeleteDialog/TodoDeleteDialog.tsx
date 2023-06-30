import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

interface Props {
  open: boolean;
  handleConfirm: () => void;
  handleClose: () => void;
}

const TodoDeleteDialog: React.FC<Props> = ({
  open,
  handleConfirm,
  handleClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this todo?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button
          onClick={handleConfirm}
          autoFocus
          variant="contained"
          color="error"
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodoDeleteDialog;
