import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      {" "}
      404: Not Found
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
