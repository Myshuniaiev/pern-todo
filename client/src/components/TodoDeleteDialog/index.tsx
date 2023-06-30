import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoRequest } from "../../redux/todos/slice";
import TodoDeleteDialog from "./TodoDeleteDialog";

interface DeleteDialogContainerProps {
  open: boolean;
  handleClose: () => void;
  todoId: number | null;
}

const TodoDeleteDialogContainer: React.FC<DeleteDialogContainerProps> = ({
  open,
  handleClose,
  todoId,
}) => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    if (todoId) {
      dispatch(deleteTodoRequest(todoId));
    }
    handleClose();
  };

  return (
    <TodoDeleteDialog
      open={open}
      handleConfirm={handleConfirm}
      handleClose={handleClose}
    />
  );
};

export default TodoDeleteDialogContainer;
