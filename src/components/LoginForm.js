import React, { PropTypes } from 'react';
import { Link } from 'react-router';


// TODO: Display errors on form. E.g. invalid email
const LoginForm = ({
  user,
  errors,
  onSubmit,
  onEmailChange,
  onPasswordChange
}) =>
  (
    <div className="form">

      <form className="login-form">
        <input autoFocus type="text" onChange={onEmailChange} value={user.email} placeholder="email" />
        <input type="password" onChange={onPasswordChange} value={user.password} placeholder="password" />
        <button onClick={(e) => onSubmit(e)}>login</button>
        <p className="message">Not registered? <Link to="login" onClick={() => console.log('TODO: redirect')}> Create an account</Link></p>
      </form>
    </div>
  )


LoginForm.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired
}

export default LoginForm
