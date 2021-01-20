import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import Layout from './Layout';
import Home from './Home';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Redirect path="/" exact to="/home" />
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
