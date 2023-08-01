import { Label, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  darkHandler: () => void;
  darkMode: boolean;
}

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const endLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": {
    color: "secondary.main",
  },
  "&.active": {
    color: "grey.400",
  },
};

function Header(props: Props) {
  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center">
            <Typography
              sx={{ color: "inherit", textDecoration: "none" }}
              component={NavLink}
              to={"/"}
              variant="h6"
            >
              RE-STORE
            </Typography>
            <Switch
              checked={props.darkMode}
              onChange={props.darkHandler}
              color="error"
              inputProps={{ "aria-label": "toggle dark mode" }}
            />{" "}
            {props.darkMode ? "Dark Mode On" : "Activate Dark Mode"}
          </Box>

          <List sx={{ display: "flex" }}>
            {midLinks.map((x) => {
              return (
                <ListItem component={NavLink} to={x.path} sx={navStyles}>
                  {x.title.toUpperCase()}
                </ListItem>
              );
            })}
          </List>

          <Box display="flex" >
            <IconButton size="large" edge="start" sx={{ m: 2 }}>
              <Badge badgeContent="4" color="secondary">
                <ShoppingCart></ShoppingCart>
              </Badge>
            </IconButton>
            <List sx={{ display: "flex" }}>
              {endLinks.map((x) => {
                return (
                  <ListItem component={NavLink} to={x.path} sx={navStyles}>
                    {x.title.toUpperCase()}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
