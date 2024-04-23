import { Link } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { useEmployee } from "../../contexts/EmployeeContext";
import employees from "../../mock/employees";
import columns from "../../mock/columns";

function EmployeeList() {
  // const { employeeList } = useEmployee();
  // console.log(employeeList);

  return (
    <>
      <Container
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "primary.main",
        }}
      >
        <Typography sx={{ m: 4 }} variant="h1">
          Current Employees
        </Typography>
        <Box sx={{ height: 700, width: "100%" }}>
          <DataGrid
            rows={employees}
            columns={columns}
            ColumnFilter
            ColumnSelector
            DensitySelector
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10, 25, 50, 100]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Container>
      <Box>
        <Link
          to="/"
          className=" mb-12 mt-8 block text-2xl text-[#1976d2] hover:text-[#1565c0] hover:underline"
        >
          Home
        </Link>
      </Box>
    </>
  );
}

export default EmployeeList;
