import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Quests from './Quests';
import Rewards from './Rewards';
import UserProgress from './UserProgress';

export default function Game() {
  const [quests, setQuests] = useState([
    { name: 'Read a book', completed: false },
    { name: 'Finish a course', completed: false },
    // Add more quests
  ]);

  const [rewards, setRewards] = useState([
    { name: 'Unlock Level 1', points: 10 },
    { name: 'Unlock Level 2', points: 20 },
    // Add more rewards
  ]);

  const [userPoints, setUserPoints] = useState(0);

  const completeQuest = (index) => {
    // Handle quest completion logic and update userPoints
  };

  return (
    <div>
      <h1>Game Page</h1>
      <Link to="/home">Home</Link>

      <Quests quests={quests} completeQuest={completeQuest} />
      <Rewards rewards={rewards} userPoints={userPoints} />
      <UserProgress userPoints={userPoints} />
    </div>
  );
};

