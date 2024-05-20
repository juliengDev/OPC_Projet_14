import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Dropdown({ register, label, options, defaultValue, id }) {
  return (
    <FormControl fullWidth>
      <InputLabel required>{label}</InputLabel>
      <Select
        defaultValue={defaultValue}
        sx={{ width: 1, mt: 2 }}
        {...register(id)}
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
