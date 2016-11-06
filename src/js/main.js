var React = require('react');
var ReactDOM = require('react-dom');

// App Components
var NavBar = require('./components/NavBar.js');
var SearchBar = require('./components/SearchBar.js');
var SearchResults = require('./components/SearchResults.js');

ReactDOM.render(
  <div>  
    <NavBar />,
    <SearchBar />,
    <SearchResults />,
  </div>,
  document.getElementById('main')
);
