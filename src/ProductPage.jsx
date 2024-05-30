import { Button, Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductPage({ product }) {
  return (
    <div style={{ marginLeft: 50 }}>
      <div>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ margin: "50px" }}
        >
          Back Home
        </Button>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: "50%",
            height: "350px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        ></Box>
        <Box align="left" sx={{ marginTop: "10px", marginLeft: "30px" }}>
          <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
            {product.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="grey"
            sx={{ textTransform: "capitalize" }}
          >
            {product.company}
          </Typography>
          <Typography variant="subtitle1">${product.price / 100}</Typography>

          {product.colors.map((color, index) => (
            <CircleIcon sx={{ color: { color } }} key={index} />
          ))}
          <Typography variant="subtitle1">{product.description}</Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              margin: "50px",
              textTransform: "none",
              color: "success",
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </div>
  );
}
