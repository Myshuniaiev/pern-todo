// TodoFormDialogContainer.tsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoFormDialog from "./TodoFormDialog";
import { updateTodoRequest, createTodoRequest } from "../../redux/todos/slice";
import { Todo } from "../../types";

interface TodoFormDialogContainerProps {
  open: boolean;
  todo?: Todo;
  handleClose: () => void;
}

const TodoFormDialogContainer: React.FC<TodoFormDialogContainerProps> = ({
  open,
  todo,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
  }>({
    title: todo ? todo.title : "",
    description: todo ? todo.description : "",
  });

  // Updating form data if `todo` prop changes
  React.useEffect(() => {
    if (todo) {
      setFormData({ title: todo.title, description: todo.description });
    } else {
      setFormData({ title: "", description: "" });
    }
  }, [todo]);

  const handleSave = () => {
    if (todo) {
      dispatch(
        updateTodoRequest({
          ...todo,
          title: formData.title,
          description: formData.description,
        })
      );
    } else {
      dispatch(
        createTodoRequest({
          id: Date.now(),
          title: formData.title,
          description: formData.description,
        })
      );
    }
    handleClose();
  };

  return (
    <TodoFormDialog
      open={open}
      title={formData.title}
      description={formData.description}
      handleClose={handleClose}
      handleSave={handleSave}
      handleTitleChange={(title) => setFormData((prev) => ({ ...prev, title }))}
      handleDescriptionChange={(description) =>
        setFormData((prev) => ({ ...prev, description }))
      }
    />
  );
};

export default TodoFormDialogContainer;
