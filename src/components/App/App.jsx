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
      {/* Task 1 */}
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
        <FriendList friends={friends} />
      </section>
      <section>
        <TransactionHistory transactions={transactions} />
      </section>
    </main>
  );
}
