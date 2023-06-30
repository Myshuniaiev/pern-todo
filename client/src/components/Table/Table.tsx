import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton, Stack } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { Todo } from "../../types";
import TodoFormDialogContainer from "../TodoFormDialog";
import TodoDeleteDialogContainer from "../TodoDeleteDialog";

interface Props {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  updateTodoId: number | null;
  setUpdateTodoId: (id: number | null) => void;
  deleteTodoId: number | null;
  setDeleteTodoId: (id: number | null) => void;
}

const TodoTable: React.FC<Props> = ({
  todos,
  loading,
  error,
  updateTodoId,
  setUpdateTodoId,
  deleteTodoId,
  setDeleteTodoId,
}) => {
  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Title",
      width: 200,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      renderCell: ({ row }) => (
        <Stack spacing={0.5} direction="row">
          <IconButton size="small" onClick={() => setUpdateTodoId(row.id)}>
            <Edit fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => setDeleteTodoId(row.id)}>
            <Delete fontSize="small" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        loading={loading}
        rows={todos}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
      <TodoFormDialogContainer
        open={!!updateTodoId}
        todo={todos.find((todo) => todo.id === updateTodoId)}
        handleClose={() => setUpdateTodoId(null)}
      />
      <TodoDeleteDialogContainer
        open={!!deleteTodoId}
        handleClose={() => setDeleteTodoId(null)}
        todoId={deleteTodoId}
      />
    </Box>
  );
};

export default TodoTable;
