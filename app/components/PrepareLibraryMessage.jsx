var React = require('react');

var PrepareLibraryMessage = React.createClass({
  render: function () {
    var {libraryName, mensagem} = this.props;
    return (
      <h3>{libraryName}. {mensagem}.</h3>
    )
  }
});

module.exports = PrepareLibraryMessage;
