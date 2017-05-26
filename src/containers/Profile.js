import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ProfileCard from '../components/ProfileCard';

const Profile = ({ user }) => {

  const handleClick = e => {
    console.log(e);
  }
  return (
    <div className="row">
      <div className="col-xs-12 site-content" id="about">
        <div className="container">
          <ProfileCard
            user={user}
            handleCameraClick={handleClick}
          />
        </div>
      </div>
    </div >

  )
}



Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(Profile);
