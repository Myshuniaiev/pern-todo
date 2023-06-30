import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton, Stack } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

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
    renderCell: () => (
      <Stack spacing={0.5} direction="row">
        <IconButton size="small">
          <Edit fontSize="small" />
        </IconButton>
        <IconButton size="small">
          <Delete fontSize="small" />
        </IconButton>
      </Stack>
    ),
  },
];

const rows = [
  {
    id: 1,
    title: "Finish report",
    description:
      "Complete the final section of the quarterly report and send it to the team for review.",
  },
  {
    id: 2,
    title: "Buy groceries",
    description:
      "Purchase eggs, milk, bread, and vegetables from the supermarket on the way back from work.",
  },
  {
    id: 3,
    title: "Call plumber",
    description:
      "Contact the local plumbing service and schedule an appointment to fix the leaking faucet in the kitchen.",
  },
  {
    id: 4,
    title: "Research vacation destinations",
    description:
      "Spend some time researching popular vacation spots and gather information about accommodation, attractions, and transportation options.",
  },
  {
    id: 5,
    title: "Update website content",
    description:
      "Review the existing website content and make necessary updates to ensure accuracy and relevance.",
  },
  {
    id: 6,
    title: "Pay electricity bill",
    description:
      "Log in to the online payment portal and settle the pending electricity bill.",
  },
];

export default function TodoTable() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
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
    </Box>
  );
}
