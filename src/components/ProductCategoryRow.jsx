var React = require('react');

var ProductCategoryRow = React.createClass({
  render(){
    return(
      <tr>
        <th colSpan="2" style={{marginTop: 20}}>
          <strong >
          {this.props.category}
          </strong>
        </th>
      </tr>
    );
  }
});

module.exports = ProductCategoryRow;
