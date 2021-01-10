import React from 'react';
import HeaderContainer from './components/header/HeaderContainer/HeaderContainer';
import BodyContainer from './components/layout/BodyContainer/BodyContainer';
import ColLeft from './components/layout/ColLeft/ColLeft';
import ColRight from './components/layout/ColRight/ColRight';
import Intro from './components/ui/Intro/Intro';

function App() {
  return (
    <>
      <HeaderContainer />
      <BodyContainer>
        <ColLeft>
          <Intro />
        </ColLeft>
        <ColRight>
        </ColRight>
      </BodyContainer>
    </>

  );
}

export default App;
