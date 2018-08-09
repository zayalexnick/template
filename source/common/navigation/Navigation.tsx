import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '~/Main/screens/Main.screen';

export default (): JSX.Element => (
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
    </Router>
);