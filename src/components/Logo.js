import React from 'react';
import logoImp from '../assets/img/logo.png';
import withRouter  from "react-router";

const Logo = (props) => {
    return (
        <div onClick={() => window.location.href = '/'}>
            <img
                src={logoImp}
                alt="logo"
                class="w-24 h-10 header-logo"
            />
        </div>
    );
};

export default Logo;