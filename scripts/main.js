var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var browserHistory = ReactRouter.browserHistory;

var helpers = require('./helpers');
/*
 * App
 */

var App = React.createClass({
  render: function () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
});

/*
 * Header
 * <Header />
 */
var Header = React.createClass({
  render: function () {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    )
  }
});

/*
 *  Order
 *  <Order />
 */
var Order = React.createClass({
  render: function () {
    return (
      <p>Order</p>
    )
  }
});

/*
 * Inventory
 * <Inventory />
 */
var Inventory = React.createClass({
  render: function () {
    return (
      <p>Inventory</p>
    )
  }
});

/*
 * StorePicker
 */

var StorePicker = React.createClass({
  goToStore: function (event) {
    event.preventDefault();
    //get data from the input
    //transition from storepicker to app
    var storeId = this.refs.storeId.value;
    browserHistory.push(null, '/store/' + storeId);
  },

  render: function () {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input type="text" ref="storeId" defaultValue={helpers.getFunName()}  required />
        <input type="submit" />
      </form>
    )
  }
});

/*
 * Not Found
 */
var NotFound = React.createClass({
  render: function () {
    return (
      <h1>Not Found</h1>
    )
  }
});

/*
 * Routes
 */

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={StorePicker}>
      <Route path="/store/:storeId" component={App} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('main')
);
