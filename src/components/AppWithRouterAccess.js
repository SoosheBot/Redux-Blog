import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Security, LoginCallback } from '@okta/okta-react';

import Login from './Login';


export default withRouter(class AppWithRouterAccess extends Component {
  constructor(props) {
    super(props);
    this.onAuthRequired = this.onAuthRequired.bind(this);
  }

  onAuthRequired() {
    this.props.history.push('/login')
  }

  render() {
    return (
        <Security issuer='https://dev-628267.okta.com/oauth2/default'
                  clientId='{0oajiiv018Rnmz3KD4x6}'
                  redirectUri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={this.onAuthRequired}
                  pkce={true} >

          <Route path='/login' render={() => <Login baseUrl='https://dev-628267.okta.com' />} />
          <Route path='/implicit/callback' component={LoginCallback} />
        </Security>
    );
  }
});
