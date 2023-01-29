import { MenuItem, Select } from "@mui/material";

const SelectMenu = ({ locations, location, handleChange }) => {
  return (
    <>
      <Select
        value={location}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          width: "250px",
        }}
      >
        <MenuItem value="">
          <em> -- Select Location --</em>
        </MenuItem>
        {locations &&
          locations.map((opt) => (
            <MenuItem key={opt.locationId} value={opt.locationId}>
              {opt.locationName}
            </MenuItem>
          ))}
      </Select>
    </>
  );
};

export default SelectMenu;
