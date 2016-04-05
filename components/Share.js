var React = require('react');

var Share = React.createClass({
  getInitialState() {
    return { count: 0 };
  },
  addToCount(e){
    e.preventDefault();
    var countNow = this.state.count;
    this.setState({count: countNow + 1})
  },
  render() {
    return (
      <li><a href="#" onClick={this.addToCount}>Messages <span className="badge fb-share-button">{this.state.count}</span></a></li>
    )
  }

});

module.exports = Share;
