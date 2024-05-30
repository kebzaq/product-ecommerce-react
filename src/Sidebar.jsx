import React, { useState } from "react";
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

export default function Sidebar({
  companiesList,
  handleSearch,
  selectedCompany,
}) {
  const drawerWidth = 200;
  console.log(companiesList, "companies SIDE");
  const [input, setInput] = useState("");
  const [selCompany, setSelCompany] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
    handleSearch(value);
  };
  const handleClick = (e) => {
    const { textContent } = e.target;
    console.log(e.target.textContent);
    setSelCompany(textContent);
    selectedCompany(textContent);
    console.log(textContent, "selected company");
  };

  return (
    <>
      <Box
        sx={{
          with: "200px",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          padding: "30px",
          backgroundColor: "#BCBDC0",
        }}
      >
        {/* <AppBar
          position="fixed"
          sx={{
            dth: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          dfghdfghdfghdfghdfghdfg dfgdfgdfgdfgdfgdf
        </AppBar> */}

        <Toolbar sx={{ marginBottom: 10 }} />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          value={input}
          onChange={handleChange}
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
        <List sx={{ marginLeft: 2 }}>
          {companiesList.map((company, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText
                  sx={{ textTransform: "capitalize" }}
                  primary={company}
                  onClick={handleClick}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
