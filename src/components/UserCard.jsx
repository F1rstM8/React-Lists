import { Component } from 'react';
import SocialLink from './SocialLink';
import './UserCard.css';

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasImageError: false
    };
  }

  handleImageError = () => {
    this.setState({ hasImageError: true });
  };

  render() {
    const { firstName, lastName, profilePicture, contacts } = this.props;
    const { hasImageError } = this.state;

    const fullName = (firstName || lastName) 
      ? `${firstName} ${lastName}`.trim() 
      : "Unknown User";

    const initials = `${firstName ? firstName[0] : ''}${lastName ? lastName[0] : ''}`;

    return (
      <li className="user-card">
        <div className="card-image-wrapper">
          {hasImageError || !profilePicture ? (
            <div className="image-placeholder">
              <span className="placeholder-text">{initials || '?'}</span>
            </div>
          ) : (
            <img 
              src={profilePicture} 
              alt={fullName} 
              className="card-image"
              onError={this.handleImageError} 
            />
          )}
        </div>
        
        <div className="card-content">
          <h2 className="card-name">{fullName}</h2>
          {contacts && contacts.length > 0 && (
            <div className="card-contacts">
              {contacts.map((link, index) => (
                <SocialLink key={index} link={link} />
              ))}
            </div>
          )}
        </div>
      </li>
    );
  }
}

export default UserCard;