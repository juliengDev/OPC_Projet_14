import { Link } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { formatDate } from "../../utils/helper";
import Dropdown from "../../Components/dropdown/Dropdown";
import usStates from "../../mock/states";
import department from "../../mock/department";
import { Container, TextField, Typography, Button, Box } from "@mui/material";
import { useEmployee } from "../../contexts/EmployeeContext";
import { useState } from "react";
import DateSelector from "../../Components/datePicker/DateSelector";
import { Modal } from "juliengilbertdev-modal";

const initialEmployeeState = {
  birthDate: null,
  startDate: null,
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  department: "",
  state: "",
  zipCode: "",
};

function NewEmployeeForm() {
  const [employee, setEmployee] = useState(initialEmployeeState);
  const [isOpen, setIsOpen] = useState(false);

  const { createEmployee } = useEmployee();

  function handleChange(key, value) {
    setEmployee((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newEmployee = {
      ...employee,
      birthDate: formatDate(employee.birthDate),
      startDate: formatDate(employee.startDate),
    };
    createEmployee(newEmployee);
    setEmployee(initialEmployeeState);
    setIsOpen(!isOpen);
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "primary.main",
          }}
        >
          <Typography variant="h1">HRnet</Typography>
          <Link
            to="/employee-list"
            className=" mb-12 mt-8 block text-2xl text-[#1976d2] hover:text-[#1565c0] hover:underline"
          >
            View Current Employees
          </Link>
          <Typography variant="h2">Create Employee</Typography>
          <form
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col items-center"
          >
            <TextField
              sx={{ width: 1, mb: 4 }}
              id="firstName"
              label="First Name"
              variant="standard"
              value={employee.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
            <TextField
              sx={{ width: 1, mb: 4 }}
              id="lastName"
              label="Last Name"
              variant="standard"
              value={employee.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
            <DateSelector
              label="Date of Birth"
              value={employee.birthDate}
              onChange={(date) => handleChange("birthDate", date)}
            />

            <DateSelector
              label="Start Date"
              value={employee.startDate}
              onChange={(date) => handleChange("startDate", date)}
            />

            <fieldset className="mb-12 min-w-[240px] rounded-md border border-gray-300 px-4 py-8 pb-12">
              <legend className=" text-lg ">Address</legend>
              <Box>
                <TextField
                  sx={{ width: 1, mb: 2 }}
                  id="street"
                  label="Street"
                  variant="standard"
                  value={employee.street}
                  onChange={(e) => handleChange("street", e.target.value)}
                />
              </Box>
              <Box>
                <TextField
                  sx={{ width: 1, mb: 4 }}
                  id="city"
                  label="City"
                  variant="standard"
                  value={employee.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                />
              </Box>
              <Box>
                <Dropdown
                  label="State"
                  value={employee.state}
                  options={usStates}
                  handleChange={(value) => handleChange("state", value)}
                />
              </Box>
              <Box>
                <TextField
                  sx={{ width: 1, mt: 2 }}
                  id="zipCode"
                  label="Zip Code"
                  variant="standard"
                  value={employee.zipCode}
                  onChange={(e) => handleChange("zipCode", e.target.value)}
                />
              </Box>
            </fieldset>

            <Dropdown
              label="Department"
              value={employee.department}
              options={department}
              handleChange={(value) => handleChange("department", value)}
            />

            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Button variant="contained" type="submit">
                Save
              </Button>
            </Box>
          </form>
        </Container>
      </LocalizationProvider>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        icon="🎉"
        mainTitle="Succes"
        mainStyle={{ paddingTop: "1rem" }}
        textStyle={{ padding: "1rem 0" }}
        text="Employee Created!"
      />
    </>
  );
}

export default NewEmployeeForm;
