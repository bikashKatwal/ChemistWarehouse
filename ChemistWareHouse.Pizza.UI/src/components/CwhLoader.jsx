import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
export default function CwhLoader() {
  return (
    <Stack
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box>
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
      </Box>
    </Stack>
  );
}
