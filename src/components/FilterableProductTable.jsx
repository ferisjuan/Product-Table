var React = require('react');

var SearchBar = require('./SearchBar.jsx');
var ProductTable = require('./ProductTable.jsx');

var info = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

var FilterableProductTable = React.createClass({
  render(){
    return(
      <div className="">
        <SearchBar />
        <ProductTable info={info} />
      </div>
    );
  }
});

module.exports = FilterableProductTable;
