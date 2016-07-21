var React = require('react');

var SearchBar = require('./SearchBar.jsx');
var ProductTable = require('./ProductTable.jsx');

var products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

var FilterableProductTable = React.createClass({
  getInitialState(){
    return{
      filterText: '',
      inStockOnly: false
    }
  },
  handleUserInput(filterText, inStockOnly){
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  },
  render(){
    return(
      <div className="">
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable products={products}
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
});

module.exports = FilterableProductTable;
