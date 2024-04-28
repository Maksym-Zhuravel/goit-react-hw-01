import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import userData from "../../data/userData.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";
import css from "../App/App.module.css";

export default function App() {
  return (
    <main>
      <h2>Task 1</h2>
      <section className={css.section}>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </section>
      <section>
        <h2>Task 2</h2>
        <FriendList friends={friends} />
      </section>
      <section>
        <h2>Task 3</h2>
        <TransactionHistory transactions={transactions} />
      </section>
    </main>
  );
}
