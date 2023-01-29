import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const MainLayout = ({ children, sx = {}, elevation = 0 }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Paper elevation={elevation} sx={{ p: 2.5, ...sx }}>
        {children}
      </Paper>
    </Box>
  );
};

export default MainLayout;
