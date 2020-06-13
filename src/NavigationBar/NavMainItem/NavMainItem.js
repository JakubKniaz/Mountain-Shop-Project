import React from 'react';

const navMainItem = (props) => (
    <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">
        {props.children}
    </a>
);

export default navMainItem;