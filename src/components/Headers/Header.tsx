import * as React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

import logo from '../../assets/images/logo.svg';

export default () => {
  return (
    <header className="tm-header">
      <div className="container clearfix">
        <Link to="/" className="logo">
          <img src={logo} />
        </Link>
        <div className="pull-right">
          <a href="#" className="menu-item">
            <i className="icon-account_circle" />
          </a>
        </div>
      </div>
    </header>
  );
};
