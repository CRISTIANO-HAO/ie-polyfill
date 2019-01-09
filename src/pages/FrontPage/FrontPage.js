import * as React from "react";
import Icon from 'Assets/image/logo.svg';
import xmlData from 'Assets/xml/data.xml';
import printMe from 'Assets/js/print.js';

import './FrontPage.less'

class FrontPage extends React.Component {
    componentDidMount() {
        this.props.fetchData();
        console.log(xmlData)
    }
    render() {
        return (
            <div>
                <h1 className='hello'>Hello React</h1>
                <button onClick={printMe}>Click me and check the console</button>
                <img src={Icon} />
            </div>
        );
    }
}

export default FrontPage;
