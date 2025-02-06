import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { Modal } from "juliengilbertdev-modal";
import Form from "../../ui/Form";

function NewEmployeeForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Typography component="h1" variant="h2" className="text-lg font-extrabold text-gray-800">
          HRnet
        </Typography> */}
        <Link
          to="/employee-list"
         className=" mt-8 block text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-3 px-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
        >
          View Current Employees
        </Link>
        

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
