import React, { lazy, Suspense} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));

const App: React.FC = () => (
  <Router>
      <Suspense fallback={<div>Loading...</div>}>
          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
              </ul>
          </nav>

          <Switch>
              <Route path="/about">
                  <About/>
              </Route>
              <Route path="/">
                  <Home/>
              </Route>
          </Switch>
      </Suspense>
  </Router>

  );


export default App;
