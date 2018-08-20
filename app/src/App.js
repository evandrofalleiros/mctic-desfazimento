import React, { Component } from 'react';
import './App.css';
import {Helmet} from 'react-helmet';
import { BrowserRouter as Router} from 'react-router-dom';
import MinificHeader from './minific/MinificHeader';
import MinificMain from './minific/MinificMain';
import Home from './home';
import Gerenciamento from './gerenciamento';

class App extends Component {
  constructor(){
    super();

    this.state = {
      routes:[
        {
          path: "/",
          exact: true,
          main: () => <Home />
        },
        {
          path: "/gerenciamento",
          main: () => <Gerenciamento />
        }
      ] 
    }
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>MCTIC | Desfazimento</title>
            <link href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" rel="stylesheet" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous" />
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
          </Helmet>
          <MinificHeader />
          <MinificMain routes={this.state.routes}/>
        </div>
      </Router>
    );
  }
}

export default App;
