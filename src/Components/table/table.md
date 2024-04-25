# DateSelector Component

The `Table` component is a fast and extendable react data table and react data grid using the Material-UI `DataGrid` and `GridToolbar`. It's a feature-rich component available in MIT or Commercial versions from `@mui/x-data-grid`

## Documentation

To use this component in your project, please follow the official guide right here :

https://mui.com/x/react-data-grid/

## Usage

### Importing the component

```js
import Table from "../../Components/table/Table";
```

## Example Usage

```js
import React from "react";
import Table from "../../Components/table/Table";
import employees from "../../mock/employees"; // Assuming this provides an array of employee data

function App() {
  return (
    <div>
      <Table employees={employees} />
    </div>
  );
}

export default App;
```

## Props

The `Table` component accepts the following props:

- `employees` (`Array<object>`, _required_): An array of objects representing the rows of data to display in the table.

### Additional Configuration Props

- `rows` (`Array<object>`, _required_): The data to be rendered in the table.
- `columns` (`Array<object>`, _required_): The configuration of columns for the table.
- `ColumnFilter` (`boolean`): Enable column filters in the table header.
- `ColumnSelector` (`boolean`): Enable column selector dropdown in the toolbar.
- `DensitySelector` (`boolean`): Enable density selector dropdown in the toolbar to change row density.
- `slots` (`object`): Custom slots to override default components like the toolbar.
- `slotProps` (`object`): Props to be passed to custom slots.
- `initialState` (`object`): Initial state of the table (e.g., pagination settings).
- `pageSizeOptions` (`Array<number>`): Options for the number of rows per page.
- `checkboxSelection` (`boolean`): Whether to enable checkbox selection for rows.
- `disableRowSelectionOnClick` (`boolean`): Whether row selection is disabled on row click.
