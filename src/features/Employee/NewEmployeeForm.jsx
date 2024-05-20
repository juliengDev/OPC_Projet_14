import { Link } from "react-router-dom";
import Form from "../../ui/Form";
import { Modal } from "juliengilbertdev-modal";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Container, Typography } from "@mui/material";
import { useState } from "react";

function NewEmployeeForm() {
  const [isOpen, setIsOpen] = useState(false);

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
          <Typography component="h1" variant="h2">
            HRnet
          </Typography>
          <Link
            to="/employee-list"
            className=" mb-12 mt-8 block text-3xl text-[#1976d2] hover:text-[#1565c0] hover:underline"
          >
            View Current Employees
          </Link>
          <Typography component="h2" variant="h3">
            Create Employee
          </Typography>
          <Form isOpen={isOpen} setIsOpen={setIsOpen} />
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
