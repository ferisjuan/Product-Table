var React = require('react');

var ProductCategoryRow = require('./ProductCategoryRow.jsx');
var ProductRow = require('./ProductRow.jsx');

var ProductTable  =React.createClass({
  render(){
    var rows = [];
    var lastCat = null;

    this.props.products.forEach(function (el, index) {
      if(el.category === lastCat){
        rows.push(<ProductRow product={el}/>)
      }else {
        rows.push(<ProductCategoryRow category={el.category}/>)
        rows.push(<ProductRow product={el}/>)
      }
      lastCat = el.category;
    });

    return(
      <table className="table table-inverse">
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = ProductTable;
