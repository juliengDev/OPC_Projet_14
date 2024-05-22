# Dropdown Component

The `Dropdown` component is a dropdown menu implemented using the Material-UI `FormControl` `InputLabel` `Select` and `MenuItem` components from `@mui/material` and `Controller` from `react-hook-form`.

## Documentation

To use this component in your project, please follow the official guide right here :

### React MUI

- `FormControl` : https://mui.com/base-ui/react-form-control/
- `InputLabel` : https://mui.com/material-ui/api/input-label/
- `Select` : https://mui.com/material-ui/react-select/
- `MenuItem` : https://mui.com/material-ui/api/menu-item/

### React Hook Form

- `Controller` : https://react-hook-form.com/get-started#IntegratingControlledInputs

## Usage

### Importing the component

```js
import Dropdown from "../../Components/dropdown/Dropdown";
import Controller from "react-hook-form";
```

## Example Usage

```js
import Dropdown from "../../Components/dropdown/Dropdown";
import Controller from "react-hook-form";
import department from "../mock/department";

function App() {
  return (
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
  );
}

export default App;
```

## Props

### The `Controller` component accepts the followings props :

- `control` (`object`, _required_): The `control` object from React Hook Form. It's used to control the form state and validation.
- `name` (`string`, _required_): The name of the input field. This should match the name used in the form state.
- `render` (`function`, _required_): A function that returns the React element to render. It receives an object containing `field` as a parameter.
  - `field` (`object`, _required_): An object containing `value`, `ref`,`onChange` properties. This object should be passed to the `DateSelector` component as `field` prop.
    - `value` (`Date | null`, _required_): The currently selected date.
    - `onChange` (`function`, _required_): Callback function triggered when the selected date changes. The function receives the selected `Date` as an argument.
    - `ref` (`object`): Reference to the input element. _(Optional)_

### The `Dropdown` component accepts the following props:

- `label` (`string`, _required_): The label for the dropdown.
- `id` (`string`, _required_): The id for the dropdown.
- `options` (`array`, _required_): An array of objects representing the options for the dropdown menu. Each object should have `value` and `label` properties.
- `value` (`any`, _required_): The currently selected value from the dropdown menu.
- `onChange` (`function`, _required_): Callback function triggered when the selected value changes. The function receives the new selected value as an argument.
