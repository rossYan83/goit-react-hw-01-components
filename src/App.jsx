import user from './data/users.json';
import info from './data/info.json';
import Profile from './components/Profiles';
import Statistics from './components/Statistics';
import friends from './data/friends.json';
import FriendList from './components/Friendlist';
import transactions from './data/transactions.json';
import Transaction from './components/Transactions';
 



export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" items={info} />
      <FriendList friends={friends} />;
      <Transaction items={transactions} />
    </>
  );
}