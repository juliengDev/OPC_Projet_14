import { Controller, useForm } from "react-hook-form";
import { useEmployee } from "../contexts/EmployeeContext";
import Dropdown from "../Components/dropdown/Dropdown";
import DateSelector from "../Components/dateSelector/DateSelector";
import { TextField, Button, Box } from "@mui/material";
import usStates from "../mock/states";
import department from "../mock/department";
import { formatDate, formatStatecode } from "../utils/helper";
import { useState } from "react";
import FormError from "./FormError";

const initialEmployeeState = {
  birthDate: null,
  startDate: null,
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  department: "Sales",
  state: "Alabama",
  zipCode: "",
};
function Form({ isOpen, setIsOpen }) {
  const [employee, setEmployee] = useState(initialEmployeeState);
  const { createEmployee } = useEmployee();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  function onSubmit(data) {
    const newEmployee = {
      ...data,
      birthDate: formatDate(data.birthDate),
      startDate: formatDate(data.startDate),
      id: crypto.randomUUID(),
      state: formatStatecode(data.state),
    };
    console.log(newEmployee);
    createEmployee(newEmployee);
    setEmployee(initialEmployeeState);
    setIsOpen(!isOpen);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 flex flex-col items-center"
    >
      <TextField
        required
        sx={{ width: 1, mb: 2 }}
        id="firstName"
        name="firstName"
        label="First Name"
        variant="standard"
        {...register("firstName", {
          required: "Please put your  firstname",
          minLength: {
            value: 4,
            message: "Min length is 4",
          },
        })}
      />
      <FormError>{errors.firstName?.message}</FormError>
      <TextField
        required
        sx={{ width: 1, mb: 2 }}
        id="lastName"
        label="Last Name"
        variant="standard"
        {...register("lastName", {
          required: "Please put your  lastname",
          minLength: {
            value: 4,
            message: "Min length is 4",
          },
        })}
      />
      <FormError>{errors.lastName?.message}</FormError>

      <Controller
        control={control}
        name="birthDate"
        rules={{ required: "Date of Birth is required" }}
        render={({ field }) => {
          return (
            <>
              <DateSelector label="Date of Birth" field={field} />
              <FormError>{errors.birthDate?.message}</FormError>
            </>
          );
        }}
      />

      <Controller
        control={control}
        name="startDate"
        rules={{ required: "Starting date is required" }}
        render={({ field }) => {
          return (
            <>
              <DateSelector label="Start Date" field={field} />
              <FormError>{errors.startDate?.message}</FormError>
            </>
          );
        }}
      />

      <fieldset className="mb-12 min-w-[240px] rounded-md border border-gray-300 px-4 py-8 pb-12">
        <legend className="text-lg ">Address</legend>
        <Box>
          <TextField
            required
            sx={{ width: 1, mb: 2 }}
            id="street"
            label="Street"
            variant="standard"
            {...register("street")}
          />
          <FormError>{errors.street?.message}</FormError>
        </Box>
        <Box>
          <TextField
            required
            sx={{ width: 1, mb: 4 }}
            id="city"
            label="City"
            variant="standard"
            {...register("city")}
          />
        </Box>
        <Box>
          <Dropdown
            label="State"
            id="state"
            options={usStates}
            defaultValue={employee.state}
            register={register}
          />
        </Box>
        <Box>
          <TextField
            required
            sx={{ width: 1, mt: 2 }}
            id="zipcode"
            label="Zip Code"
            variant="standard"
            {...register("zipcode")}
          />
        </Box>
      </fieldset>

      <Dropdown
        label="Department"
        id="department"
        options={department}
        defaultValue={employee.department}
        register={register}
      />

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </Box>
    </form>
  );
}

export default Form;
