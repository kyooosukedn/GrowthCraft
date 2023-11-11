import React from 'react';
import { Typography } from '@mui/material';

const UserProgress = ({ userPoints }) => {
  return (
    <div>
      <h2>User Progress</h2>
      <Typography variant="body1">Points: {userPoints}</Typography>
    </div>
  );
};

export default UserProgress;