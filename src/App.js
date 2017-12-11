import React from 'react';
import HashRouter from 'react-router-dom/HashRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import './styles/style.scss';
import Welcome from './screens/Welcome';
import UserScreen from './screens/UserScreen'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="fill">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/home" component={UserScreen} />
            <Route exact path="/me" component={Welcome} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
