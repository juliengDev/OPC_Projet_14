import { DatePicker } from "@mui/x-date-pickers";

function DateSelector({ field, label }) {
  return (
    <DatePicker
      sx={{ width: 1, mb: 1 }}
      label={label}
      value={field.value || null}
      inputRef={field.ref}
      onChange={(date) => {
        field.onChange(date);
      }}
    />
  );
}

export default DateSelector;
