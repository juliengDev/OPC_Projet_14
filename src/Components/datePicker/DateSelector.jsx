import { DatePicker } from "@mui/x-date-pickers";

function DateSelector({ label, value, onChange }) {
  return (
    <DatePicker
      sx={{ width: 1, mb: 4 }}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
}

export default DateSelector;
