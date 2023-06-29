import React from "react";
import { Button, InputBase, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CreateTodoModal from "../../components/CreateTodo";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function HomePage() {
  const [createTodoOpen, setCreateTodoOpen] = React.useState<boolean>(false);
  return (
    <>
      <Container fixed sx={{ p: "30px 0" }}>
        <Typography
          variant="h3"
          fontWeight={500}
          sx={{ width: "100%", textAlign: "start", mt: 1, mb: 1, pb: 1 }}
        >
          Todo List
        </Typography>
        <Stack direction="row" spacing={3}>
          <TextField
            variant="filled"
            fullWidth
            placeholder="Enter id or name of the todo"
            label="Search"
            id="search-field"
          />
          <Button
            size="small"
            sx={{ width: "10%" }}
            variant="contained"
            onClick={() => setCreateTodoOpen(true)}
          >
            Create new
          </Button>
        </Stack>
      </Container>
      <CreateTodoModal
        open={createTodoOpen}
        onClose={() => setCreateTodoOpen(false)}
        onSubmit={() => setCreateTodoOpen(false)}
      />
    </>
  );
}
