# DateSelector Component

The `DateSelector` component is a datepicker implemented using the Material-UI `DatePicker` from `@mui/x-date-pickers`.

## Documentation

To use this component in your project, please follow the official guide right here :

https://mui.com/x/react-date-pickers/

## Usage

### Importing the component

```js
import DateSelector from "../../Components/datePicker/DateSelector";
```

## Example Usage

```js
import React, { useState } from "react";
import DateSelector from "../../Components/datePicker/DateSelector";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DateSelector
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

The `DateSelector` component accepts the following props:

- `label` (`string`, _required_): The label for the datepicker.
- `value` (`Date | null`, _required_): The currently selected date.
- `onChange` (`function`, _required_): Callback function triggered when the selected date changes. The function receives the selected `Date` as an argument.
