import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Member from './containers/member/Member';

function App() {
  return (
    <Router>
      <Route
        path="/member/register"
        render={Member}/>
      <Route
        path="/member/login"
        render={Member}/>
      <Redirect path="*" to="/" />
    </Router>
  );
}

export default App;
