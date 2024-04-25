# Dropdown Component

The `Dropdown` component is a dropdown menu implemented using the Material-UI `FormControl` `InputLabel` `Select` and `MenuItem` components from `@mui/material`

## Documentation

To use this component in your project, please follow the official guide right here :

- `FormControl` : https://mui.com/base-ui/react-form-control/
- `InputLabel` : https://mui.com/material-ui/api/input-label/
- `Select` : https://mui.com/material-ui/react-select/
- `MenuItem` : https://mui.com/material-ui/api/menu-item/

## Usage

### Importing the component

```js
import Dropdown from "../../Components/dropdown/Dropdown";
```

## Example Usage

```js
import React, { useState } from "react";
import Dropdown from "../../Components/dropdown/Dropdown";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Dropdown
        label="Select a Date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default App;
```

## Props

The `Dropdown` component accepts the following props:

- `label` (`string`, _required_): The label for the datepicker.
- `value` (`Date | null`, _required_): The currently selected date.
- `onChange` (`function`, _required_): Callback function triggered when the selected date changes. The function receives the selected `Date` as an argument.
