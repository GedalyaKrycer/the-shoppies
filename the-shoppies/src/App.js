import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeWrapper from './components/layout/HomeWrapper/HomeWrapper';
import WinnerWrapper from './components/layout/WinnerWrapper/WinnerWrapper';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomeWrapper} />
        <Route path="/winner" component={WinnerWrapper} />
      </Switch>
    </>

  );
}

export default App;
