import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
  TextField,
} from "@mui/material";

export default function Sidebar({ companiesList }) {
  const drawerWidth = 240;
  console.log(companiesList, "companies SIDE");
  return (
    <>
      {/* <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        ></AppBar>
      </Box> */}
      <Toolbar sx={{ marginBottom: 10 }} />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
        </div>
      </Box>

      <Typography variant="h6" sx={{ marginTop: 5 }}>
        Company
      </Typography>
      <List sx={{ marginLeft: 5 }}>
        {companiesList.map((company, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText
                sx={{ textTransform: "capitalize" }}
                primary={company}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
