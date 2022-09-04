import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { LinkProps } from "@mui/material/Link";
import { Button, ButtonGroup, createTheme } from "@mui/material";
import App from "../App";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material";
import { Stack } from "@mui/system";

const Menu = () => {
  return (
    <>
      <nav>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ButtonGroup
            sx={{
              display: "flex",
              gap: "20px",
            }}
            variant=""
            aria-label="contained primary button group"
          >
            <NavLink to="/signin" style={{ textDecoration: "none" }}>
              <Button variant="contained">Login</Button>
            </NavLink>

            <NavLink to="/signup" style={{ textDecoration: "none" }}>
              <Button variant="contained">Register</Button>
            </NavLink>
            <NavLink to="/app" style={{ textDecoration: "none" }}>
              <Button variant="contained">App</Button>
            </NavLink>
            <Stack>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            </Stack>
          </ButtonGroup>
        </Box>
      </nav>
      <Outlet />
    </>
  );
};

export default Menu;
