import React from 'react'
import { Modal } from 'react-bootstrap'

class ShoppingCart extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.userId = "testi";
        this.state = {
            showModal: false,
            shoppingCartPrice: 1,
            shoppingCartProducts: [{name: "testi", id: 1}]
        }
    }
    
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick(index) {
        // TODO: remove product from shopping cart from current position
    }

    buyProducts() {
        // TODO: calidate shopping cart and attempt to buy products
    }
    
    closeConfirmationModal() {
    }

    openConfirmationModal() {
    }


    render() {
        return (
            <div>
                <div className="row">
                    <b> {this.state.showModal}</b>
                    <div className="col-xs-8">
                        <h2>Ostoskori <i className="fa fa-shopping-cart fa-2"></i><b> {this.state.shoppingCartPrice.toFixed(2)}</b></h2>
                    </div>
                    <div className="col-xs-4">
                        {(this.state.shoppingCartProducts.length > 0 ?
                            <button type="button" onClick={this.openConfirmationModal.bind(this)} className='btn btn-success margin-top-20'>
                                
                                <b>GO!</b>
                            </button>
                            :
                            <button disabled className='mm-disabled btn margin-top-20'>
                                <b>GO!</b>
                            </button>
                        )}
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="col-xs-6" >Tuote</th>
                                <th className="col-xs-5" >Hinta</th>
                                <th className="col-xs-1" ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.shoppingCartProducts.map((product, index) =>
                                <tr key={index} onClick={this.handleClick.bind(this, index)}>
                                    <td className="col-xs-6" >
                                        {product.name}
                                    </td>
                                    <td className="col-xs-5" >
                                        <span className="badge">{product.price} ۞</span>
                                    </td>
                                    <td className="col-xs-1" ><i className="fa fa-remove fa-2"></i></td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <Modal show={this.state.showModal} onHide={this.closeConfirmationModal.bind(this)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Kaikki valmista?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h3>Ostoksia yhteensä: <b> {this.state.shoppingCartPrice.toFixed(2)}</b></h3>
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" className="btn btn-alert" onClick={this.closeConfirmationModal.bind(this)}>Peruuta</button>
                            <button type="button" className="btn btn-success" onClick={this.buyProducts.bind(this)}>Osta</button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>



        )
    }
}

export default ShoppingCart;