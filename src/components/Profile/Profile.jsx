import css from "../Profile/Profile.module.css";

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <>
      <div className={css.container}>
        <img
          className={css.profileImage}
          src={avatar}
          alt="User avatar"
          height={200}
        />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li>
          <span>Followers:</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views:</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes:</span>
          <span>{likes}</span>
        </li>
      </ul>
    </>
  );
}
