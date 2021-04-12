import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Member from './containers/member/Member';
import Main from './containers/main/Main';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,
  section,
  article,
  main,
  header,
  footer,
  div,
  ul,
  li,
  button,
  a {
    margin: 0;
    padding: 0;
  }
  
  ul,
  li {
    list-style: none;
  }
  
  button,
  a {
    appearance: none;
    border: none;
    background: transparent;
    
    &:active {
      opacity: .6;
    }
  }
`
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
    </>
  );
}

export default App;
