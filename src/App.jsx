import "./App.css";
import Profile from "./Components/Task-1/Profile";
import userData from "./Components/Task-1/userData.json";
import FriendList from "./Components/Task-2/FriendList";
import friends from "./friends.json";
import TransactionHistory from './Components/Task-3/TransactionHistory';
import transactions from './transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
