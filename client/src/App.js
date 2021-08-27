import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


import TopBar from './components/topbar/TopBar';
import HomePage from './pages/homepage/HomePage';
import Single from './pages/single/Single';
import Posted from './pages/posted/Posted';
import Footer from './components/footbar/Footer';

function App() {


  return (
   <Router>
      <TopBar/>
      <Switch>
        <Router exact path='/'>
          <HomePage/>
        </Router>
        <Router path='/posted'>
          <Posted/>
          </Router>
        <Router path='/post/:postId'>
          <Single/>
        </Router>
      </Switch>
      <Footer/>
   </Router>
  );
}

export default App;
