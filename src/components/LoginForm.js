import React, { PropTypes } from 'react';

const LoginForm = ({
  user,
  errors,
  onSubmit,
  onChange
}) =>
  (
    <div className="form">

      <form className="login-form">
        <input type="text" onChange={onChange} value={user.email} placeholder="email" />
        <input type="password" onChange={onChange} value={user.password} placeholder="password" />
        <button onClick={onSubmit}>login</button>
        <p className="message">Not registered? <a onClick={() => console.log('TODO: redirect')}> Create an account</a></p>
      </form>
    </div>
  )


LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default LoginForm
