import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Member from './containers/member/Member';
import Main from './containers/main/Main';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <main>
          <Route
            exact
            path="/"
            component={Main}/>
          <Route
            path="/member/register"
            component={Member}/>
          <Route
            path="/member/login"
            component={Member}/>
          <Redirect path="*" to="/" />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
