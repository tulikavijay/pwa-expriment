
import React, {Component} from 'react';
import {Router,browserHistory,Route,Link} from 'react-router';
import logo from './logo.svg';
import './App.css';

const Page = ({title}) =>(
  <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
</div>
)
const Home=()=>(
<Page title='Home' />
)
const About=()=>(
  <Page title="About" />
)
const Settings=()=>(
<Page title="Settings" />
)
class App extends Component{
  render(){
    return(
      <Router history={browserHistory}>
         <Route path="/" component={Home} />
         <Route path='/About' component={About} />
         <Route path="/Settings" component={Settings} />
      </Router>
    )
  }
}

export default App;
