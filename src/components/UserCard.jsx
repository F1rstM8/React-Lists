import { Component } from "react";
import "./UserCard.css";
const PLATFORMS_MAP = {
  facebook: "fab fa-facebook-f",
  twitter: "fab fa-twitter",
  instagram: "fab fa-instagram",
  linkedin: "fab fa-linkedin-in",
  youtube: "fab fa-youtube",
  tiktok: "fab fa-tiktok",
};

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasImageError: false,
    };
  }

  handleImageError = () => {
    this.setState({ hasImageError: true });
  };

  render() {
    const { firstName, lastName, profilePicture, contacts } = this.props;
    const { hasImageError } = this.state;

    const fullName =
      firstName || lastName
        ? `${firstName} ${lastName}`.trim()
        : "Unknown User";

    const initials = `${firstName ? firstName[0] : ""}${lastName ? lastName[0] : ""}`;

    return (
      <li className="user-card">
        <div className="card-image-wrapper">
          {hasImageError || !profilePicture ? (
            <div className="image-placeholder">
              <span className="placeholder-text">{initials || "?"}</span>
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
              {contacts.map((link, index) => {
                const matchedKey = Object.keys(PLATFORMS_MAP).find((key) =>
                  link.includes(key),
                );

                const iconClass = matchedKey
                  ? PLATFORMS_MAP[matchedKey]
                  : "fas fa-link";

                return (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn icon-btn"
                  >
                    <i className={iconClass}></i>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </li>
    );
  }
}

export default UserCard;
