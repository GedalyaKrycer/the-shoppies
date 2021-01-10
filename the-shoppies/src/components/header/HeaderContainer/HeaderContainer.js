import React from 'react';
import './headerContainer.scss'
import Logo from '../../ui/Logo/Logo';
import Intro from '../Intro/Intro';

const HeaderContainer = () => {
    return (
        <header>
            <Logo />
            <Intro />
        </header>
    )
}

export default HeaderContainer;