import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './containers/App';
import SignIn from './containers/SignIn';
// import Page404 from './containers/Page404';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SignIn} />
    {/* <Route path="404" component={Page404} /> */}
    {/* <Redirect from="*" to="404" /> */}
  </Route>
);
