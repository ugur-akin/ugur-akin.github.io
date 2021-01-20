import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import Layout from './pages/Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Redirect path="/" exact to="/home" />
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
