var React = require('react');
var PrepareLibraryForm = require('PrepareLibraryForm');
var PrepareLibraryMessage = require('PrepareLibraryMessage');
var drugdesignApi = require('drugdesignApi');


var PrepareLibrary = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      isPreparingLib: false
    }
  },
  handleSearch: function (libraryName) {
    var that = this;

    this.setState({isLoading: true, isPreparingLib:true});

    drugdesignApi.preparelibrary(libraryName).then(function (lig_men) {
      that.setState({
      libraryName: libraryName,
      ligMen : lig_men,
      isLoading: false,
      isPreparingLib: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false, isPreparingLib: false});
      alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading, isPreparingLib, libraryName, ligMen} = this.state;

    function renderMessage () {
      if (isPreparingLib) {
        return <h3>Prepare Library is running ...</h3>;
      } else if (isLoading){
        return <h3>Prepare Library is loading...</h3>;
      }else if (libraryName) {
        return <PrepareLibraryMessage libraryName={libraryName} ligMen={ligMen}/>;
      }
    }
    return (
      <div>
        <h3>PrepareLibrary Component</h3>
        <PrepareLibraryForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    )
  }
});

module.exports = PrepareLibrary;
