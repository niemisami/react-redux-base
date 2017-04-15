const ProductItem = (props) => {
    return (
        <tr>
            <td key={this.props.id}>
                {this.props.name}
            </td>
            <td>
                <span className="badge">{this.props.price} ۞</span>
            </td>
        </tr>
    )
}

export default ProductItem;