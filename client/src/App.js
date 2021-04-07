import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Member from './containers/member/Member';
import Main from './containers/main/Main';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route
          exact
          path="/"
          render={Main}/>
        <Route
          path="/member/register"
          render={Member}/>
        <Route
          path="/member/login"
          render={Member}/>
        <Redirect path="*" to="/" />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
