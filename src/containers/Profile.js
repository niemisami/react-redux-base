import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Profile = ({ user }) => {

  const handleClick = e => {
    console.log(e);
  }
  return (
    <div className="row">
      <div className="col-xs-12 site-content" id="about">
        <div className="container">

          {/*Profile Card*/}
          <div className="col-xs-12 col-sm-5 col-md-3 card profile">
            <div className="profile-picture">
              <div className="tooltip">
                <button type="button" onClick={handleClick}>
                  <i className="fa fa-camera"></i>
                </button>
                <span className="tooltip-text tooltip-left">Change profile picture</span>
              </div>
            </div>
            <div className="info-container">
              <h2>{user.name}</h2>
              <div>
                Here I have profile content
          </div>
            </div>
          </div>
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
