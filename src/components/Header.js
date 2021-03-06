import React from 'react';
import {NavLink } from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink>&nbsp;&nbsp;
        <NavLink to="/create" activeClassName="is-active">Add</NavLink>&nbsp;&nbsp;
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>&nbsp;&nbsp;
    </header>
);
export default Header;