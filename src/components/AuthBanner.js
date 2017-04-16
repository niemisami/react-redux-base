import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions'

const AuthBanner = ({ userName, logout }) => (
    <div>
        <h3>{userName}</h3>
        <button className="btn btn-warning btn-xs" type="button" onClick={logout} >Kirjaudu ulos</button>
    </div>
)

AuthBanner.propTypes = {
    userName: PropTypes.string.isRequired,
    logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  userName: state.auth.userName
})

export default connect(mapStateToProps, {
  logout
})(AuthBanner);