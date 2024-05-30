import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ProductPage from "./ProductPage";

export default function Products({ products, getSelectedProduct }) {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Our Products
      </Typography>
      <hr />
      <Box
        component="ul"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
          p: 0,
          m: 0,
        }}
      >
        {products.map((product, ind) => {
          return (
            <Card sx={{ minWidth: 345 }} key={ind}>
              <CardActionArea
                component={RouterLink}
                to={`/products/${product.name}`}
                onClick={() => getSelectedProduct(product)}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(product.price / 100)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </>
  );
}
