import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const Rewards = ({ rewards, userPoints }) => {
  return (
    <div>
      <h2>Rewards</h2>
      <List>
        {rewards.map((reward, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${reward.name} - ${reward.points} Points`} />
            {userPoints >= reward.points && (
              <Button variant="contained" color="primary">
                Claim
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Rewards;