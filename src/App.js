import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomePage from './Layouts/WelComePage';
import BlogPage from './Layouts/BlogPage';
import Tools from './Layouts/Tools';
import { Spring } from 'react-spring/renderprops';

function App() {
  return (
  <React.Fragment>
    <div>
        <WelcomePage/>
    </div>
    <div id="Body">
      <div id="BlogSection">
        <BlogPage/>
      </div>
    </div>
  </React.Fragment>
  );
}

export default App;
