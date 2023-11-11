import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const Quests = ({ quests, completeQuest }) => {
  return (
    <div>
      <h2>Quests</h2>
      <List>
        {quests.map((quest, index) => (
          <ListItem key={index}>
            <ListItemText primary={quest.name} />
            {!quest.completed && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => completeQuest(index)}
              >
                Complete
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Quests;