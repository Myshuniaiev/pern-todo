import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import TodoTable from "../Table";
import TodoFormDialogContainer from "../TodoFormDialog";

interface HomePageComponentProps {
  todos: any[];
  loading: boolean;
  error: string | null;
  createTodoOpen: boolean;
  handleCreateTodoOpen: () => void;
}

const HomePageComponent: React.FC<HomePageComponentProps> = ({
  todos,
  loading,
  error,
  createTodoOpen,
  handleCreateTodoOpen,
}) => {
  return (
    <>
      <Container fixed sx={{ p: "30px 0" }}>
        <Typography variant="h5" fontWeight={500}>
          Todo List
        </Typography>
        <Stack direction="row" spacing={3} margin={"20px 0"}>
          <TextField
            fullWidth
            label="Search"
            variant="filled"
            id="search-field"
            placeholder="Enter id or name of the todo"
          />
          <Button
            size="small"
            variant="contained"
            sx={{ width: "10%" }}
            onClick={handleCreateTodoOpen}
          >
            Create new
          </Button>
        </Stack>
        <TodoTable />
      </Container>
      <TodoFormDialogContainer
        open={createTodoOpen}
        handleClose={handleCreateTodoOpen}
      />
    </>
  );
};

export default HomePageComponent;
