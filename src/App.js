/*
 * @Author: haotengfei 
 * @Date: 2019-01-09 09:28:32 
 * @Last Modified by: haotengfei
 * @Last Modified time: 2019-01-09 17:33:24
 */
import * as React from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import routes from "./routes";

class App extends React.Component {
    render() {
      console.log(this.props);
      return (
        <div>
            {routes}
        </div>
      );
    }
}

export default compose(
    withRouter
)(App);