import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Dropdown({ label, value, options, handleChange }) {
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    handleChange(selectedValue);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={`${label}Label`}>{label}</InputLabel>
      <Select
        labelId={`${label}Label`}
        id={label.toLowerCase()}
        value={value}
        onChange={handleDropdownChange}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
