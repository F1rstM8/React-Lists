import UserCard from './UserCard';
import './UserList.css';

const UserList = ({ usersArray }) => {
  return (
    <section className="user-list-section">
      <h1 className="main-title">Celebrity Directory</h1>
      <ul className="user-grid">
        {usersArray.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </ul>
    </section>
  );
};

export default UserList;