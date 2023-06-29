import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/material";

interface IProps {
  open: boolean;
  onClose: Function;
  onSubmit: Function;
}

export default function CreateTodoModal({ open, onClose, onSubmit }: IProps) {
  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={() => onClose()}>
      <DialogTitle>Create New todo</DialogTitle>
      <DialogContent>
        <Stack direction="column" spacing={3}>
          <TextField id="name" fullWidth label="Title" variant="filled" />
          <TextField
            id="description"
            fullWidth
            label="Description"
            variant="filled"
            multiline
            rows={2}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>Cancel</Button>
        <Button onClick={() => onSubmit()} variant="contained">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
