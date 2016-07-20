var React = require('react');

var SearchBar = React.createClass({
  render(){
    return(
      <div className="">
        <form>
          <input type='text'/><br/>
          <input type='checkbox' />Only show products in stock
        </form>
      </div>
    );
  }
});

module.exports = SearchBar;
