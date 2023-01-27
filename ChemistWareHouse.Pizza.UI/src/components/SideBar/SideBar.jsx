import { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useLocation, useNavigate } from "react-router-dom";
import CWHLogo from "../../assets/CWH_logo.png";

const drawerWidth = 240;

const navItems = [
  {
    text: "Home",
    icon: <HomeOutlinedIcon />,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsIcon />,
  },
];

export default function SideBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Box
            component="img"
            alt="Chemist Warehouse"
            src={CWHLogo}
            height="50px"
            width="240px"
            sx={{ objectFit: "contain" }}
          />
        </Toolbar>
        <Divider />
        <List>
          {navItems.map((item) => {
            const lcText = item.text.toLowerCase();

            return (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`/${lcText}`);
                    setActive(lcText);
                  }}
                  sx={{
                    backgroundColor:
                      active === lcText
                        ? theme.palette.primary.light
                        : "transparent",
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
