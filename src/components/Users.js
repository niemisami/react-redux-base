import React from 'react'
import UserItem from './UserItem'

class Users extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        // this.setState = this.setState.bind(this);
    }

    componentDidMount() {

        // TODO: move logic to actions
        fetch('/wallofshame')
            .then(response => response.json()
            ).then(json => {
                json.users.sort(function(userA, userB) {
                    return userA.balance < userB.balance ? -1 : 1;
                })
                // this.setState({
                //     users: json.users
                // })
            }).catch(error => {
                console.log('parsing failed', error)
                this.setState({
                    users: []
                })
            })
    }

    render() {
        return (
            <div>
                <h2>Wall of Shame</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="col-xs-6" >Kurja riiviö</th>
                            <th className="col-xs-6" >Häpeän määrä</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user =>
                            <UserItem key={user.id} name={user.name} balance={user.balance} />
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users