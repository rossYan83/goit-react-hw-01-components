import user from './data/users.json';
import info from './data/info.json';
import Profile from './components/Profiles';
import Statistics from './components/Statistics';

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
    </>
  );
}