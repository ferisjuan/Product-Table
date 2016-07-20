var React = require('react');

var ProductCategoryRow = React.createClass({
  render(){
    return(
      <tr>
        <th>
        <strong>
          {this.props.info.category}
        </strong>
        </th>
      </tr>
    );
  }
});
