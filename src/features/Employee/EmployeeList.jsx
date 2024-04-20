import { Container, Typography } from "@mui/material";

function EmployeeList() {
  return (
    <Container
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "primary.main",
      }}
    >
      <Typography variant="h1">Current Employees</Typography>
    </Container>
  );
}

export default EmployeeList;
