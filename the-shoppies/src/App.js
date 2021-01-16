import React from 'react';
import HeaderContainer from './components/header/HeaderContainer/HeaderContainer';
import BodyWrapper from './components/layout/BodyWrapper/BodyWrapper';
import ColLeftWrapper from './components/layout/ColLeftWrapper/ColLeftWrapper';
import Intro from './components/ui/Intro/Intro';
import MovieSearchContainer from './components/search/MovieSearchContainer/MovieSearchContainer';
import NominationContainer from './components/nominations/NominationContainer/NominationContainer';


function App() {
  return (
    <>
      <BodyWrapper>
        <ColLeftWrapper>
          <HeaderContainer />
          <Intro />
          <MovieSearchContainer />
        </ColLeftWrapper>
        <NominationContainer />
      </BodyWrapper>
    </>

  );
}

export default App;
