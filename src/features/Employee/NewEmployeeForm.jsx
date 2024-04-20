import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { formatDate } from "../../utils/helper";
import {
  Container,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  Select,
  FormControl,
  Button,
  Box,
} from "@mui/material";
import { useEmployee } from "../../contexts/EmployeeContext";

function NewEmployeeForm() {
  const [birthDate, setBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("");
  const { createEmployee, employeeList } = useEmployee();

  function handleSubmit(e) {
    e.preventDefault();
    const newEmployee = {
      birthDate: formatDate(birthDate),
      startDate: formatDate(startDate),
      firstName,
      lastName,
      street,
      city,
      department,
    };
    createEmployee(newEmployee);
    setBirthDate(null);
    setStartDate(null);
    setFirstname("");
    setLastName("");
    setStreet("");
    setCity("");
    setDepartment("");
  }
  console.log(employeeList);
  return (
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
            id="standard-basic"
            label="First Name"
            variant="standard"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            sx={{ width: 1, mb: 4 }}
            id="standard-basic"
            label="Last Name"
            variant="standard"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <DatePicker
            sx={{ width: 1, mb: 4 }}
            label="Date of Birth"
            className="input"
            value={birthDate}
            onChange={(date) => setBirthDate(date)}
          />
          <DatePicker
            sx={{ width: 1, mb: 4 }}
            label="Start Date"
            className="input"
            value={startDate}
            onChange={(date) => setStartDate(date)}
          />

          <fieldset className="mb-12  min-w-[240px] rounded-md border border-gray-300 px-4 py-8">
            <legend className=" text-lg ">Address</legend>
            <Box>
              <TextField
                sx={{ width: 1, mb: 2 }}
                id="standard-basic"
                label="Street"
                variant="standard"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </Box>
            <Box>
              <TextField
                sx={{ width: 1, mb: 2 }}
                id="standard-basic"
                label="City"
                variant="standard"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Box>
          </fieldset>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <InputLabel id="Departement">Departement</InputLabel>
            <Select
              labelId="Department"
              id="Department"
              value={department}
              name="Department-select"
              label="Department"
              onChange={(e) => setDepartment(e.target.value)}
            >
              <MenuItem value="Sales">Sales</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Engineering">Engineering</MenuItem>
              <MenuItem value="Human Resources">Human Resources</MenuItem>
              <MenuItem value="Legal">Legal</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Box>
        </form>
      </Container>
    </LocalizationProvider>
  );
}

export default NewEmployeeForm;
