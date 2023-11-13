import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";


export default function GameLandingPage() {
  return (
    <Box p={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img
            src="../public/WOjC9SjZ.jpg"
            alt="Game Image"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mt={4} mb={2}>
            <Link to="/home" variant="h4" color="primary" href="#" style={{ marginRight: "20px" }}>
              HOME
            </Link>
            <Link to="/game" variant="h4" color="primary" href="#" style={{ marginRight: "20px" }}>
              GAMES
            </Link>
            <Link variant="h4" color="primary" href="#" style={{ marginRight: "20px" }}>
              TRACKER
            </Link>
            <Link variant="h4" color="primary" href="#">
              CONTACT US
            </Link>
          </Box>
          <Typography variant="h1" color="primary" paragraph>
            GROWTH CRAFT
          </Typography>
          <Typography variant="body1" paragraph>
            We believe that every activity should be a great experience and enhance your growth.
          </Typography>
          <Button variant="contained" color="secondary" style={{ marginRight: "20px" }}>
            SIGN UP NOW
          </Button>
          <Button to="/login" variant="contained" color="secondary">
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
