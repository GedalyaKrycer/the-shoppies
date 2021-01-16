import React from 'react';
import HeaderContainer from './components/header/HeaderContainer/HeaderContainer';
import BodyWrapper from './components/layout/BodyWrapper/BodyWrapper';
import ColLeft from './components/layout/ColLeft/ColLeft';
import Intro from './components/ui/Intro/Intro';
import MovieSearchContainer from './components/search/MovieSearchContainer/MovieSearchContainer';
import NominationContainer from './components/nominations/NominationContainer/NominationContainer';


function App() {
  return (
    <>
      <BodyWrapper>
        <ColLeft>
          <HeaderContainer />
          <Intro />
          <MovieSearchContainer />
        </ColLeft>
        <NominationContainer />
      </BodyWrapper>
    </>

  );
}

export default App;
