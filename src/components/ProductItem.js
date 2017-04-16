import React, { PropTypes } from 'react';

const ProductItem = ({ product, onProductClicked }) => {
    return (
        <tr onClick={onProductClicked}>
            <td className="col-xs-6" >
                {product.name}
            </td>
            <td className="col-xs-5" >
                <span className="badge">{product.price} ۞</span>
            </td>
        </tr>
    )
}

ProductItem.propTypes = {
    product: PropTypes.shape( {
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    onProductClicked: PropTypes.func
}

export default ProductItem;