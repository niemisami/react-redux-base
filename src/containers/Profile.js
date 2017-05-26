import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Profile = ({ user }) => (

  <div className="row">
    <div className="col-xs-12 site-content" id="about">
      <div className="container">

        {/*Profile Card*/}
        <div className="col-xs-12 col-sm-3 card profile">
          <div className="profile-picture">
            <h1>{user.name}</h1>
            <div>
              Here I have profile content
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

)



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
