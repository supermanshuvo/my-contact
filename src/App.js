import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar'
import Signup from './components/Signin';
import Todo from './components/Todo';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Todo />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
