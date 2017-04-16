import React from 'react'
import ProductItem from './ProductItem'


const Product = ({price, name}) => {
    
}
class Products extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.state = {
            products: [{
                name: "Testi",
                id: 11
            }]
        }
    }

    componentDidMount() {
        // TODO: fetch products from API
    }

    componentWillUnmount() {
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick(product) {
        // TODO: add product to the shopping cart
    }

    render() {
        return (
            <div>
                <h2>Tuotteet</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="col-xs-6" >Tuote</th>
                            <th className="col-xs-6" >Hinta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product, index) =>
                            <tr key={index} onClick={this.handleClick.bind(this, product)}>
                                <td>
                                    {product.name}
                                </td>
                                <td>
                                    <span className="badge">{product.price} ۞</span>
                                </td>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Products


