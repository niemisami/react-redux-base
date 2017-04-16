import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
    removeProductFromShoppingCart,
    checkout,
    hideConfirmationModal,
    displayConfirmationModal
} from '../actions/shopActions'
import { Modal } from 'react-bootstrap'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import { getCartProducts } from '../reducers'


class ShoppingCart extends Component {

    renderModal() {
        const { shoppingCart, shoppingCartPrice, userId, showModal, hideConfirmationModal, checkout } = this.props;
        return (

            <Modal show={showModal} onHide={hideConfirmationModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Kaikki valmista?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Ostoksia yhteensä: <b> {shoppingCartPrice.toFixed(2)}</b></h3>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-alert" onClick={hideConfirmationModal}>Peruuta</button>
                    <button type="button" className="btn btn-success" onClick={checkout(shoppingCart, userId)}>Osta</button>
                </Modal.Footer>
            </Modal>
        )
    }

    render() {

        const {
            shoppingCart,
            shoppingCartPrice,
            userId,
            checkout,
            removeProductFromShoppingCart
        } = this.props;

        return (

            < div className="row" >
                <div className="col-xs-8">
                    <h2>Ostoskori <i className="fa fa-shopping-cart fa-2"></i><b> {shoppingCartPrice.toFixed(2)}</b></h2>
                </div>
                <div className="col-xs-4">
                    {(shoppingCart.length > 0 ?
                        <button type="button" onClick={checkout(shoppingCart, userId)} className='btn btn-success margin-top-20'>
                            <b>Kassalle</b>
                        </button>
                        :
                        <button disabled className='mm-disabled btn margin-top-20'>
                            <b>Kassalle</b>
                        </button>
                    )}
                </div>

                < ProductsList>
                    {shoppingCart.map((product, index) =>
                        <ProductItem
                            key={index}
                            product={product}
                            onProductClicked={() => removeProductFromShoppingCart(index)} />
                    )}
                </ProductsList >

                {this.renderModal}

            </div>
        )
    }
}

ShoppingCart.propTypes = {
    shoppingCart: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired,
    userId: PropTypes.string.isRequired,
    showModal: PropTypes.bool.isRequired,
    shoppingCartPrice: PropTypes.number.isRequired,
    checkout: PropTypes.func.isRequired,
    hideConfirmationModal: PropTypes.func.isRequired,
    removeProductFromShoppingCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    shoppingCart: state.shop.shoppingCart,
    userId: state.shop.userId,
    showModal: state.shop.showModal,
    shoppingCartPrice: state.shop.shoppingCartPrice
})

export default connect(mapStateToProps, {
    removeProductFromShoppingCart,
    checkout,
    hideConfirmationModal,
    displayConfirmationModal
})(ShoppingCart)