import React from 'react';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => (
    <li className="dropdown-item">
        <NavLink to={{
            pathname: '/products/' + props.products,
            state: {title: props.title}
        }} activeClassName="active">{props.children}</NavLink>
    </li>
);

export default navigationItem;