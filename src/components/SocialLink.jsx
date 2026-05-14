import { Component } from 'react';
const PLATFORMS_MAP = {
  facebook: 'fab fa-facebook-f',
  twitter: 'fab fa-twitter',
  instagram: 'fab fa-instagram',
  linkedin: 'fab fa-linkedin-in',
  youtube: 'fab fa-youtube',
  tiktok: 'fab fa-tiktok'
};
const PLATFORM_KEYS = Object.keys(PLATFORMS_MAP);

class SocialLink extends Component {
  render() {
    const { link } = this.props;
    const matchedKey = PLATFORM_KEYS.find(key => link.includes(key));
    const iconClass = matchedKey ? PLATFORMS_MAP[matchedKey] : "fas fa-link";

    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="contact-btn icon-btn"
      >
        <i className={iconClass}></i>
      </a>
    );
  }
}

export default SocialLink;