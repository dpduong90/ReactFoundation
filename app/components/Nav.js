import React from 'react';
import {NavLink} from 'react-router-dom';
class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact to="/">HomePage</NavLink></li>
                    <li><NavLink to="/account">Account</NavLink></li>
                    <li><NavLink to="/transaction">Transaction</NavLink></li>
                </ul>
            </div>
        );
    }
}
module.exports = Nav;