var React = require('react');

var ProductCategoryRow = React.createClass({
  render(){
    var styles = {background: 'gray', color: 'white'};
    return(
      <tr>
        <th colSpan="2" style={styles}>
          <strong >
          {this.props.category}
          </strong>
        </th>
      </tr>
    );
  }
});

module.exports = ProductCategoryRow;
