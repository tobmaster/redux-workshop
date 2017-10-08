import React, {Component} from 'react';
import logo from '../../../public/img/clock.svg';
import './Header.css';

class Header extends Component {
    render() {
        const {title} = this.props;

        return (
            <div className="Header">
                <img src={logo} className="Header-logo" alt="Logo" />
                <h1>{title}</h1>
            </div>
        );
    }
}

Header.defaultProps = {
    title: 'Title'
};

export default Header;
