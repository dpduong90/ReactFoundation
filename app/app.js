import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
var React = require("react");
var ReactDOM = require("react-dom");
var redux = require("redux");
var username = (state = null, action) => {
    return state;
}
sst

var HomePage = require("HomePage");
var Main = require("Main");
var Nav = require("Nav");
var Account = require("Account");
var Transaction = require("Transaction");

ReactDOM.render(
    <Router >
        <div>
            <Route path="/" component={Main}/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/account" component={Account} />
            <Route path="/transaction" component={Transaction} />
        </div>
    </Router>,
    document.getElementById('root')
);
