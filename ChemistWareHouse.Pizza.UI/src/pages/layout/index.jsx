import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

const Layout = () => {
  return (
    <Box display="flex" width="100%" height="100%">
      <SideBar />
      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
