import clsx from "clsx";
import css from "../FriendListItem/FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{<b>{name}</b>}</p>
      <p className={clsx(isOnline === true ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
