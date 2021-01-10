import React from 'react';
import HeaderContainer from './components/header/HeaderContainer/HeaderContainer';
import BodyContainer from './components/layout/BodyContainer/BodyContainer';
import ColLeft from './components/layout/ColLeft/ColLeft';
import ColRight from './components/layout/ColRight/ColRight';

function App() {
  return (

    <BodyContainer>
      <ColLeft>
        <HeaderContainer />
      </ColLeft>
      <ColRight>
      </ColRight>
    </BodyContainer>

  );
}

export default App;
