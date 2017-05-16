import React, { PropTypes } from 'react';

const RegisterForm = () => (
  <div className="form">
    <form className="">
      <input type="text" placeholder="name" />
      <input type="password" placeholder="password" />
      <input type="text" placeholder="email address" />
      <button>create</button>
      <p className="message">Already registered? <a onClick={() => console.log('TODO: redirect')}>Sign In</a></p>
    </form>
  </div>
)

RegisterForm.propTypes = {
}

export default RegisterForm;
