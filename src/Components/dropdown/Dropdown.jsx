import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Dropdown({ label, options, value, onChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel required>{label}</InputLabel>
      <Select value={value} onChange={onChange} sx={{ width: 1, mt: 2 }}>
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
