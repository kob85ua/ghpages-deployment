import React from 'react';
import ReactDOM from 'react-dom';

import Profile from './social-profile/socialProfile.jsx';
import user from './social-profile/user.json';
import Statistics from './statistics/statistics.jsx';
import statisticalData from './statistics/statistical-data.json';
import FriendList from './friend-list/FriendsList.jsx';
import friends from './friend-list/friends.json';
import TransactionHistory from './transaction-history/TransactionHistory.jsx';
import transactions from './transaction-history/transactions.json';

ReactDOM.render(
  <React.StrictMode>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
ReactDOM.render(
  <Statistics title="Upload stats" stats={statisticalData} />,
  document.getElementById('root2'),
);

ReactDOM.render(
  <FriendList friends={friends} />,
  document.getElementById('root3'),
);

ReactDOM.render(
  <TransactionHistory items={transactions} />,
  document.getElementById('root4'),
);
