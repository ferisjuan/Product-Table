var React = require('react');

var ProductCategoryRow = require('./ProductCategoryRow.jsx');
var ProductRow = require('./ProductRow.jsx');

var ProductTable  =React.createClass({
  render(){
    var createGroup = function (el, index) {
      return (
        <ProductRow key={index+el} info={el} />
      );
    };
    return(
      <table className="">
        {this.props.info.map(createGroup)}
      </table>
    );
  }
});

module.exports = ProductTable;
