import React, { PropTypes } from 'react';

const ProfileCard = ({ user, handleCameraClick }) => (

  <div className="col-xs-12 col-sm-5 col-md-3 card profile">
    <div className="profile-picture">
      {handleCameraClick &&
        <div className="tooltip">
          <button type="button" onClick={handleCameraClick}>
            <i className="fa fa-camera"></i>
          </button>
          <span onClick={handleCameraClick} className="tooltip-text tooltip-left">Change profile picture</span>
        </div>
      }
    </div>
    <div className="info-container">
      <h2>{user.name}</h2>
      <div>
        Here I have profile content
      </div>
    </div>
  </div>
)

ProfileCard.defaultProps = {
  handleCameraClick: null
}

ProfileCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired
  }).isRequired,
  handleCameraClick: PropTypes.func
}

export default ProfileCard;
