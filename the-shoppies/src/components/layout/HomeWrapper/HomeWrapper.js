import React from 'react';
import './homeWrapper.scss';
import HeaderContainer from '../../header/HeaderContainer/HeaderContainer';
import ColLeftWrapper from '../ColLeftWrapper/ColLeftWrapper';
import Intro from '../../ui/Intro/Intro';
import MovieSearchContainer from '../../search/MovieSearchContainer/MovieSearchContainer';
import NominationContainer from '../../nominations/NominationContainer/NominationContainer';

const HomeWrapper = () => {
    return (
        <main className="homeWrapper">
            <ColLeftWrapper>
                <HeaderContainer />
                <Intro />
                <MovieSearchContainer />
            </ColLeftWrapper>
            <NominationContainer />
        </main>
    )
}

export default HomeWrapper;