var React = require('react');

var ProductCategoryRow = require('./ProductCategoryRow.jsx');
var ProductRow = require('./ProductRow.jsx');

var ProductTable  =React.createClass({
  render(){
    var rows = [];
    var lastCat = null;

    this.props.info.forEach(function (el, index) {

      if(lastCat !== el.category){
        rows.push(<ProductCategoryRow key={index+el} category={el.category}/>)
      }
      console.log(index);

      rows.push(<ProductRow key={index+el} product={el} />);
      lastCat = el.category;

    })

    return(
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

module.exports = ProductTable;
