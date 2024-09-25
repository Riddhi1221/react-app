import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from '../Main';
import Support from '../Support';
// import Blog from './Blog';
// import Contact from './Contact';

const MainWeb = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Use text or labels inside Link */}
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          {/* <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        {/* <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default MainWeb;
