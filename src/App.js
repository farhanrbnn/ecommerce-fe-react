import './App.css';
import NavbarApp from './components/navbar'
import Home from './pages/home'
import Shop from './pages/shop'
import ShopDetail from './components/shopDetail'
import Login from './components/login'

import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarApp />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={ShopDetail}/>
          <Route path="/login" component={Login}/>

        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
