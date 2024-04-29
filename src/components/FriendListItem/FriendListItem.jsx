export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{<b>{name}</b>}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
