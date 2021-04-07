import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Member from './containers/member/Member';

function App() {
  return (
    <Router>
      <Header />
      <Route
        path="/member/register"
        render={Member}/>
      <Route
        path="/member/login"
        render={Member}/>
      {/*<Redirect path="*" to="/" />*/}
      <Footer />
    </Router>
  );
}

export default App;
