import React, { PropTypes } from 'react';

const RegisterForm = ({ product, onProductClicked }) => {
    return (
        <div className="form">
            <form className="">
                <input type="text" placeholder="name" />
                <input type="password" placeholder="password" />
                <input type="text" placeholder="email address" />
                <button>create</button>
                <p className="message">Already registered? <a onClick={() => console.log("TODO: redirect")}>Sign In</a></p>
            </form>
        </div>
    )
}

RegisterForm.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    onProductClicked: PropTypes.func
}

export default RegisterForm;