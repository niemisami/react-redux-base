import React from 'react';
import { Flex } from 'reflexbox';
import { withRouter } from 'react-router-dom';

const WelcomeScreen = ({ history }) => (
    <Flex
        flex auto align="center" justify="center" column
        className="animated fadeIn"
        onClick={() => history.push('/home')}>
        <div style={{ textAlign: 'center', fontSize: '32pt' }}>
            <div style={{ marginTop: '5vw' }}>
                Nice to meet you
            </div>
        </div>
    </Flex >
);

export default WelcomeScreen;
