import css from "../Profile/Profile.module.css";

export default function Profile({
  name,
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
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.profileItem}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.profileItem}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </>
  );
}
