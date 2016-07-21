var React = require('react');

var SearchBar = React.createClass({
  handleChange(){
    this.props.onUserInput(
      this.refs.filterText.value,
      this.refs.inStockOnly.checked
    )
  },
  render(){
    return(
        <form>
          <input
            type='text'
            placeholder="Search..."
            value={this.props.filterText}
            ref="filterText"
            onChange={this.handleChange}
          />
          <p>
          <input
            type='checkbox'
            checked={this.props.inStockOnly}
            ref="inStockOnly"
            onChange={this.handleChange}
           />
           {' '}
           Only show products in stock
          </p>
        </form>
    );
  }
});

module.exports = SearchBar;
