import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addProductToShoppingCart } from '../actions/shopActions'
import { getProducts } from '../reducers'
import { Modal } from 'react-bootstrap'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'

class ProductsContainer extends Component {

    render() {
        const { products, addProductToShoppingCart } = this.props;

        return (
            < ProductsList title="Tuotteet">
                {products.map((product, index) => {
                    <ProductItem
                        key={index}
                        products={product}
                        onProductClicked={addProductToShoppingCart(product)} />
                })}
            </ProductsList >
        )
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired,
    addProductToShoppingCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    products: state.shop.products
})

export default connect(mapStateToProps, {
    addProductToShoppingCart
})(ProductsContainer)