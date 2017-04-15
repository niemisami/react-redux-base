const UserItem = (props) => {
    return (
        <tr>
            <td key={this.props.id}>
                {this.props.name}
            </td>
            <td>
                <span className="badge">{this.props.balance}</span>
            </td>
        </tr>
    )
}

export default UserItem;