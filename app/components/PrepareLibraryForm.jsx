var React = require('react');

var PrepareLibraryForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var libraryName = this.refs.libraryName.value;

    if (libraryName.length > 0) {
      this.refs.libraryName.value = '';
      this.props.onSearch(libraryName);
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="libraryName"/>
            <button>Prepare Library selected</button>
          </form>
        </div>
    );
  }
});

module.exports = PrepareLibraryForm;
