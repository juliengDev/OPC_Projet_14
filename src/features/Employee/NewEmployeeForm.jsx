import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { Modal } from "juliengilbertdev-modal";
import Form from "../../ui/Form";

function NewEmployeeForm() {
  const [isOpen, setIsOpen] = useState(false);

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
        <Typography component="h1" variant="h2">
          HRnet
        </Typography>
        <Link
          to="/employee-list"
          className=" mb-12 mt-8 block text-3xl  hover:text-blue-700 hover:underline"
        >
          View Current Employees
        </Link>
        <Typography component="h2" variant="h4">
          Create Employee
        </Typography>

        <Form isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
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
