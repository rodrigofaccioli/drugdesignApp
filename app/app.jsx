var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var SingleDocking = require('SingleDocking');
var About = require('About');
var Examples = require('Examples');
var PrepareLibrary = require('PrepareLibrary');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <Route path="preparelibrary" component={PrepareLibrary}/>
      <IndexRoute component={SingleDocking}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
