/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Flex, Box } from 'reflexbox';
import { navigateOnboarding } from '../navigation';
import { typeColors } from '../consts';
import DetailCard, { DetailCardButton } from '../components/DetailCard';



const Selection = ({ data, fadeOut, onDecision }) => {
    const {
    value, image, name, type,
  } = data;
    let body = null;
    const actions = [];
    if (type === 'home') {
        body = (
            <div style={{ marginTop: '20px' }}>
                Tässä
            </div>);
        actions.push(<DetailCardButton icon="fa-close text-red" text="No" key="no"
            onClick={() => onDecision(data, 'no')} />);
        actions.push(<DetailCardButton icon="fa-check text-green" text="Yes" key="yes"
            onClick={() => onDecision(data, 'yes')} />);
    }
    return (
        <DetailCard
            image={image}
            value={value}
            title={name}
            body={body}
            actions={actions}
            fadeOut={fadeOut}
        />
    );
};


class UserScreen extends React.Component {

    constructor(props) {
        super(props);
        console.log()
        this.state = {
            fadeOut: false,
        };
    }

    render() {
        const { id } = this.props.match.params;
        const data = { id: 'home', value: 'Home', type: 'home' };
        if (!data) {
            return (<div>Oops, no data with id {id}</div>);
        }
        const color = typeColors[data.type];
        return (
            <Box auto className={`bg-${color}-logo-light`} style={{ paddingTop: '5em' }}>
                <div className="goal-overtext">
                    Should you press a button
        </div>
                <Selection fadeOut={this.state.fadeOut} data={data} onDecision={this.handleDecision} />
            </Box>
        );
    }

    handleDecision = (data, decision) => {
        this.setState(
            { fadeOut: true },
            () => {
                setTimeout(() => {
                    navigateOnboarding(this.props.history);
                }, 550);
            },
        );
    };
}

export default withRouter(UserScreen);
