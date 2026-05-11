import { Component } from 'react';
import UserCard from './UserCard';
import './UserList.css';

class UserList extends Component {
  render() {
    const { usersArray } = this.props;

    const validUsers = usersArray.filter((user) => {
      return user.firstName?.trim() && user.lastName?.trim();
    });

    return (
      <section className="user-list-section">
        <h1 className="main-title">Celebrity Directory</h1>
        
        <ul className="user-grid">
          {validUsers.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </ul>
        
        {validUsers.length === 0 && (
          <p style={{ textAlign: 'center' }}>No users with complete data found.</p>
        )}
      </section>
    );
  }
}

export default UserList;