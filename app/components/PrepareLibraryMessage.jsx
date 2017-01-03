var React = require('react');

var PrepareLibraryMessage = React.createClass({
  render: function () {
    var {libraryName, ligMen} = this.props;
    return (
      <h3> {ligMen}</h3>
    )
  }
});

module.exports = PrepareLibraryMessage;
