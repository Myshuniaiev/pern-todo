import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

interface TodoFormDialogProps {
  open: boolean;
  title: string;
  description: string;
  handleClose: () => void;
  handleSave: () => void;
  handleTitleChange: (title: string) => void;
  handleDescriptionChange: (description: string) => void;
}

const TodoFormDialog: React.FC<TodoFormDialogProps> = ({
  open,
  title,
  description,
  handleClose,
  handleSave,
  handleTitleChange,
  handleDescriptionChange,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title ? "Update Todo" : "Create Todo"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          value={description}
          onChange={(e) => handleDescriptionChange(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodoFormDialog;
