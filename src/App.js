import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar'
import Signup from './components/Signin';
import Todo from './components/Todo';

function App() {
  return (
    <div className="Container">
    <BrowserRouter>
      <Navbar />
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
    </div>
  );
}

export default App;
