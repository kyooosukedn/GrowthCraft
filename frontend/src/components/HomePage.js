import React from "react";
import { Box, Grid, Link, Typography, Button, Paper } from "@mui/material";

export default function HomePage() {
  return (
    <Box p={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c2c9cf5-44bc-4691-ba5f-f767e4e8e8a6?apiKey=bf14acc7908b4baeba72e4969b86ba29&width=400"
            alt="Home Image"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mt={4} mb={2}>
            <Link variant="h4" color="primary" href="#" style={{ marginRight: "20px" }}>
              ABOUT US
            </Link>
            <Link variant="h4" color="primary" href="#" style={{ marginRight: "20px" }}>
              SERVICES
            </Link>
            <Link variant="h4" color="primary" href="#" style={{ marginRight: "20px" }}>
              PORTFOLIO
            </Link>
            <Link variant="h4" color="primary" href="#">
              CONTACT US
            </Link>
          </Box>
          <Typography variant="h1" color="primary" paragraph>
            Welcome to Our Website
          </Typography>
          <Typography variant="body1" paragraph>
            We provide high-quality services to meet your needs.
          </Typography>
          <Button variant="contained" color="primary">
            LEARN MORE
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
