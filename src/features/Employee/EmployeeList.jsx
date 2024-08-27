import { Link } from "react-router-dom";
import { useEmployee } from "../../contexts/EmployeeContext";
import { Container, Typography, Box } from "@mui/material";
import Table from "../../Components/table/Table";
// import employees from "../../mock/employees";

function EmployeeList() {
  const { employeeList } = useEmployee();

  return (
    <>
      <Container
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ m: 4 }} variant="h2" component="h1">
          Current Employees
        </Typography>
        <Box sx={{ height: 500, width: "100%" }}>
          {/* MOCK  DATA */}
          {/* <Table employees={employees} /> */}
          {/* CONTEXT API DATA */}
          <Table employees={employeeList} />
        </Box>
      </Container>
      <Box>
        <Link
          to="/"
          className=" mb-12 mt-8 block text-3xl hover:text-blue-700 hover:underline"
        >
          Home
        </Link>
      </Box>
    </>
  );
}

export default EmployeeList;
