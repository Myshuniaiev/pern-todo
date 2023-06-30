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
  updateReq: boolean;
  description: string;
  handleClose: () => void;
  handleSave: () => void;
  handleTitleChange: (title: string) => void;
  handleDescriptionChange: (description: string) => void;
}

const TodoFormDialog: React.FC<TodoFormDialogProps> = ({
  open,
  title,
  updateReq,
  description,
  handleClose,
  handleSave,
  handleTitleChange,
  handleDescriptionChange,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{updateReq ? "Update Todo" : "Create Todo"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          variant="filled"
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
        <TextField
          variant="filled"
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
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={!title || !description}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodoFormDialog;
