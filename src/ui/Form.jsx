import { Controller, useForm } from "react-hook-form";
import { useEmployee } from "../contexts/EmployeeContext";
import usStates from "../mock/states";
import department from "../mock/department";
import { TextField, Button, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { addYears, isValid } from "date-fns";
import Dropdown from "../Components/dropdown/Dropdown";
import DateSelector from "../Components/dateSelector/DateSelector";
import { formatDate, formatStatecode } from "../utils/helper";

const initialEmployeeState = {
  birthDate: null,
  startDate: null,
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  department: "Sales",
  state: "Alabama",
  zipcode: "",
};

function Form({ isOpen, setIsOpen }) {
  const { createEmployee } = useEmployee();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: initialEmployeeState });

  function onSubmit(data) {
    const newEmployee = {
      ...data,
      birthDate: formatDate(data.birthDate),
      startDate: formatDate(data.startDate),
      state: formatStatecode(data.state),
      id: crypto.randomUUID(), // The DataGrid component from MUI need an id for each object of the table, we use hat trick to create a unique id
    };
    console.log(newEmployee);
    createEmployee(newEmployee); // function action creator who dispatch the new employee to the reducer to update the global state
    reset(initialEmployeeState); // reset all the fields with the initial default state values
    setIsOpen(!isOpen); // handle the modal
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
        label="First Name"
        variant="standard"
        {...register("firstName", {
          required: "First name is required.",
          minLength: {
            value: 3,
            message: "First name must be at least 3 characters long.",
          },
          pattern: {
            value: /^[a-z ,.'-]+$/i,
            message: "Invalid format",
          },
        })}
        error={!!errors.firstName}
        helperText={errors.firstName ? errors.firstName.message : ""}
      />
      <TextField
        required
        sx={{ width: 1, mb: 2 }}
        id="lastName"
        label="Last Name"
        variant="standard"
        {...register("lastName", {
          required: "Last name is required.",
          minLength: {
            value: 3,
            message: "Last name must be at least 3 characters long.",
          },
          pattern: {
            value: /^[a-z ,.'-]+$/i,
            message: "Invalid format",
          },
        })}
        error={!!errors.lastName}
        helperText={errors.lastName ? errors.lastName.message : ""}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          control={control}
          name="birthDate"
          rules={{
            required: "Date of Birth is required.",
            validate: {
              validDate: (value) => isValid(new Date(value)) || "Invalid date.",
              minAge: (value) =>
                addYears(new Date(value), 18) <= new Date() ||
                "You must be at least 18 years old.",
              maxAge: (value) =>
                addYears(new Date(value), 100) >= new Date() ||
                "You must be less than 100 years old.",
            },
          }}
          render={({ field }) => {
            return (
              <DateSelector
                label="Date of Birth"
                field={field}
                error={!!errors.birthDate}
                helperText={errors.birthDate ? errors.birthDate.message : ""}
              />
            );
          }}
        />

        <Controller
          control={control}
          name="startDate"
          rules={{
            required: "Starting date is required",
            validate: {
              notPastDate: (value) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const selectedDate = new Date(value);
                selectedDate.setHours(0, 0, 0, 0);
                return (
                  selectedDate >= today ||
                  "Starting date cannot be in the past."
                );
              },
            },
          }}
          render={({ field }) => {
            return (
              <DateSelector
                label="Start Date"
                field={field}
                error={!!errors.startDate}
                helperText={errors.startDate ? errors.startDate.message : ""}
              />
            );
          }}
        />
      </LocalizationProvider>
      <fieldset className="mb-12 min-w-[240px] rounded-md border border-gray-300 px-4 py-8 pb-12">
        <legend className="text-lg ">Address</legend>
        <Box>
          <TextField
            required
            sx={{ width: 1, mb: 2 }}
            id="street"
            label="Street"
            variant="standard"
            {...register("street", {
              required: "Street name and number is required.",
              minLength: {
                value: 5,
                message: "Street name must be at least 5 characters long.",
              },
              pattern: {
                value: /^[A-Za-z0-9'.'\-\s,]+$/i,
                message: "Invalid format",
              },
            })}
            error={!!errors.street}
            helperText={errors.street ? errors.street.message : ""}
          />
        </Box>
        <Box>
          <TextField
            required
            sx={{ width: 1, mb: 4 }}
            id="city"
            label="City"
            variant="standard"
            {...register("city", {
              required: "City name is required.",
              minLength: {
                value: 3,
                message: "City name must be at least 3 characters long.",
              },
              pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: "Invalid format",
              },
            })}
            error={!!errors.city}
            helperText={errors.city ? errors.city.message : ""}
          />
        </Box>
        <Box>
          <Controller
            control={control}
            name="state"
            render={({ field }) => (
              <Dropdown
                label="State"
                id="state"
                options={usStates}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </Box>
        <Box>
          <TextField
            required
            sx={{ width: 1, mt: 2 }}
            id="zipcode"
            label="Zip Code"
            variant="standard"
            {...register("zipcode", {
              required: "Zip Code is required.",
              minLength: {
                value: 4,
                message: "Zip Code must be 4 characters long.",
              },
              pattern: {
                value: /^\d{5}(?:[-\s]\d{4})?$/,
                message: "Invalid zip code format",
              },
            })}
            error={!!errors.zipcode}
            helperText={errors.zipcode ? errors.zipcode.message : ""}
          />
        </Box>
      </fieldset>

      <Controller
        control={control}
        name="department"
        render={({ field }) => (
          <Dropdown
            label="Department"
            id="department"
            options={department}
            value={field.value}
            onChange={field.onChange}
          />
        )}
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
