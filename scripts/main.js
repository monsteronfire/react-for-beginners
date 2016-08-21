var React = require('react');
var ReactDOM = require('react-dom');

/*
 *StorePicker
 */

var StorePicker = React.createClass({
  render: function () {
    return (
      <p>Hello, it's me. I was wondering if after all this time you'd like to meet.</p>
    )
  }
});

ReactDOM.render(
  <StorePicker />,
  document.getElementById('main')
);
