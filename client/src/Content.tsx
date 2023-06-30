import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import TodoActionModal from "./components/TodoActionModal";
import TodoTable from "./components/Table";

export default function HomePage() {
  const [createTodoOpen, setCreateTodoOpen] = React.useState<boolean>(false);
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
            onClick={() => setCreateTodoOpen(true)}
          >
            Create new
          </Button>
        </Stack>
        <TodoTable />
      </Container>
      <TodoActionModal
        open={createTodoOpen}
        onClose={() => setCreateTodoOpen(false)}
        onSubmit={() => setCreateTodoOpen(false)}
      />
    </>
  );
}
