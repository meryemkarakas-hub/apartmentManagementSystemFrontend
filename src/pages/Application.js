import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import Reports from "./Reports";

const settings = [
  { label: "Profilim", icon: <PersonIcon /> },
  { label: "Çıkış Yap", icon: <ExitToAppIcon /> },
];

function LeftMenu() {
  return (
    <Box sx={{ width: 1000, flexShrink: 0 }}>
      <Reports />
    </Box>
  );
}

function Application() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [username, setUsername] = React.useState("Meryem Karakaş");
  const [open, setOpen] = React.useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();

  const handleCloseUserMenu = (label) => {
    setAnchorElUser(null);
    setIsMenuOpen(false);
    if (label === "Profilim") {
      navigate("/register");
    } else if (label === "Çıkış Yap") {
      navigate("/login");
    }
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "rgb(7, 145, 48)",marginBottom: "30px" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <HomeIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box>
            <AdbIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 0, ml: "auto" }}>
              <Tooltip title="Open settings">
                <div>
                  <IconButton
                    onClick={
                      isMenuOpen ? handleCloseUserMenu : handleOpenUserMenu
                    }
                    sx={{ p: 0 }}
                  >
                    <Typography sx={{ color: "white" }}>
                      {username}
                    </Typography>
                    {isMenuOpen ? (
                      <ArrowDropUpIcon sx={{ color: "white" }} />
                    ) : (
                      <ArrowDropDownIcon sx={{ color: "white" }} />
                    )}
                  </IconButton>
                </div>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={() => handleCloseUserMenu("")} // Empty label, we don't want to trigger any action on default close
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.label}
                    onClick={() => handleCloseUserMenu(setting.label)} // Pass the label value to the function
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{ textAlign: "center", marginRight: "8px" }}
                      >
                        {setting.label}
                      </Typography>
                      {setting.icon}
                    </div>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ display: "flex" }}>
        <LeftMenu />
      </Box>
    </div>
  );
}

export default Application;