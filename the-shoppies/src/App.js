import React from 'react';
import HeaderContainer from './components/header/HeaderContainer/HeaderContainer';
import BodyContainer from './components/layout/BodyContainer/BodyContainer';
import ColLeft from './components/layout/ColLeft/ColLeft';
import Intro from './components/ui/Intro/Intro';
import MovieSearchContainer from './components/search/MovieSearchContainer/MovieSearchContainer';
import NominationContainer from './components/nominations/NominationContainer/NominationContainer';


function App() {
  return (
    <>
      <BodyContainer>
        <ColLeft>
          <HeaderContainer />
          <Intro />
          <MovieSearchContainer />
        </ColLeft>
        <NominationContainer />
      </BodyContainer>
    </>

  );
}

export default App;
