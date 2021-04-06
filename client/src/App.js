import { BrowserRouter as Router, Route } from 'react-router-dom';
import Member from './containers/Member';
import { useState } from 'react';

function App() {
  return (
    <Router>
      <Route
        path="/member/register"
        render={Member}/>
      <Route
        path="/member/login"
        render={Member}/>
      {/*<Redirect path="*" to="/" />*/}
    </Router>
  );
}

export default App;
