import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function ProductCard({
  id,
  name,
  image,
  price,
  getSelectedProduct,
}) {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardActionArea onClick={() => getSelectedProduct(id)}>
        <CardMedia component="img" height="140" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price / 100)}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* <CardActions>
        <Button
          size="small"
          color="primary"
          style={{ margin: "0 auto", display: "flex" }}
        >
          Add to cart
        </Button>
      </CardActions> */}
    </Card>
  );
}
