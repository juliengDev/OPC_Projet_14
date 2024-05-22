# DateSelector Component

The `DateSelector` component is a datepicker implemented using the Material-UI `DatePicker` from `@mui/x-date-pickers` and `Controller` from `react-hook-form`.

## Documentation

To use this component in your project, please follow the official guide right here :

#### React MUI

- `DatePicker` : https://mui.com/x/react-date-pickers/

#### React Hook Form

- `Controller` : https://react-hook-form.com/get-started#IntegratingControlledInputs
  https://react-hook-form.com/get-started#IntegratingControlledInputs

## Usage

### Importing the components

```js
import DateSelector from "../../Components/dateSelector/DateSelector";
import Controller from "react-hook-form";
```

## Example Usage

```js
import DateSelector from "../../Components/dateSelector/DateSelector";
import Controller from "react-hook-form";
import { addYears, isValid } from "date-fns";

function App() {
  return (
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
  );
}

export default App;
```

## Props

### The `Controller` component accepts the followings props :

- `control` (`object`, _required_): The `control` object from React Hook Form. It's used to control the form state and validation.
- `name` (`string`, _required_): The name of the input field. This should match the name used in the form state.
- `rules` (`object`, _optional_): An object defining validation rules for the input field.
  - `required` (`string` or `boolean`, _optional_): If set to a string, it specifies the error message to display when the field is required and empty. If set to `true`, the field is required with a default error message.
  - `validate` (`object`, _optional_): An object containing custom validation functions or messages. Each validation function should return `true` for a valid input or a string with the error message.
    - `validDate` (`function`, _optional_): A function to validate if the date input is valid.
    - `minAge` (`function`, _optional_): A function to validate if the user's age meets a minimum requirement.
    - `maxAge` (`function`, _optional_): A function to validate if the user's age meets a maximum requirement.
- `render` (`function`, _required_): A function that returns the React element to render. It receives an object containing `field` as a parameter.
  - `field` (`object`, _required_): An object containing `value`, `ref`,`onChange` properties. This object should be passed to the `DateSelector` component as `field` prop.
    - `value` (`Date | null`, _required_): The currently selected date.
    - `onChange` (`function`, _required_): Callback function triggered when the selected date changes. The function receives the selected `Date` as an argument.
    - `ref` (`object`): Reference to the input element. _(Optional)_

### The `DateSelector` component accepts the following props:

- `label` (`string`, _required_): The label for the date picker.
- `field` (`object`, _required_): An object containing `value`, `ref`,`onChange` properties. This object is from a form library React Hook Form.
- `error` (`boolean`, _optional_): If `true`, the date picker input will be displayed in an error state.
- `helperText` (`string`, _optional_): The helper text content to be displayed below the date picker input.
