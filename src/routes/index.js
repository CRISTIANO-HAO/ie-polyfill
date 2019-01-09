import * as React from "react";
import { Route, Switch } from "react-router-dom";

import FrontPage from "Pages/FrontPage";

const routes = (
    <Switch>
        <Route exact={true} path="/" component={FrontPage} />
    </Switch>
);

export default routes;
