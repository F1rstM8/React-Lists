
import { useState } from 'react';
import './UserCard.css';

const UserCard = ({ firstName, lastName, profilePicture, contacts }) => {
  const [hasImageError, setHasImageError] = useState(false);

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
            onError={() => setHasImageError(true)} 
          />
        )}

      </div>
      
      <div className="card-content">
        <h2 className="card-name">{fullName}</h2>
        
        {contacts && contacts.length > 0 && (
          <div className="card-contacts">
            {contacts.map((link, index) => {
              let platformName = "Link";
              if (link.includes('facebook')) platformName = "Facebook";
              else if (link.includes('twitter')) platformName = "Twitter";
              else if (link.includes('instagram')) platformName = "Instagram";

              return (
                <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="contact-btn">
                  {platformName}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </li>
  );
};

export default UserCard;