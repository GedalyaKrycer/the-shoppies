import React from 'react';
import HeaderContainer from './components/header/HeaderContainer/HeaderContainer';
import BodyContainer from './components/layout/BodyContainer/BodyContainer';
import ColLeft from './components/layout/ColLeft/ColLeft';
import ColRight from './components/layout/ColRight/ColRight';
import Intro from './components/ui/Intro/Intro';
import MovieSearchContainer from './components/search/MovieSearchContainer/MovieSearchContainer';
import NominationContainer from './components/nominations/NominationContainer/NominationContainer';
import NominationBackground from './components/nominations/NominationBackground/NominationBackground';
import './app.scss'


function App() {
  return (
    <>
      <div className="split">
        <BodyContainer>
          <HeaderContainer />
          <ColLeft>
            <Intro />
            <MovieSearchContainer />
          </ColLeft>
          {/* <ColRight>
          </ColRight> */}
        </BodyContainer>
        <NominationContainer />
      </div>
    </>

  );
}

export default App;
