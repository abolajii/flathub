import React from 'react';
import logoImp from '../assets/img/logo_white.png';

const Logo = () => {
    return (
        <div>
            <img
                src={logoImp}
                alt="logo"
                class="w-24 h-10 header-logo"
            />
        </div>
    );
};

export default Logo;