import "./App.css";
import Profile from "./сomponents/Task-1/Profile";
import userData from "./сomponents/Task-1/userData.json";
import FriendList from "./сomponents/Task-2/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./сomponents/Task-3/TransactionHistory";
import transactions from "./transactions.json";

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
