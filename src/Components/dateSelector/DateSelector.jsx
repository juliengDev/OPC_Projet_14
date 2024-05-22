import { DatePicker } from "@mui/x-date-pickers";

function DateSelector({ field, label, error, helperText }) {
  return (
    <DatePicker
      sx={{ width: 1, m: 2 }}
      label={label}
      value={field.value || null}
      inputRef={field.ref}
      onChange={(date) => {
        field.onChange(date);
      }}
      slotProps={{
        textField: {
          error: error,
          helperText: helperText,
          fullWidth: true,
          variant: "standard",
        },
      }}
    />
  );
}

export default DateSelector;
