var React = require('react');

var ProductRow = React.createClass({
	render(){
		var name = null;

		if(this.props.product.stocked){
			name = <td style={{color: 'black'}}>{this.props.product.name}</td>
		}else {
			name = <td style={{color: 'red'}}>{this.props.product.name}</td>
		}

		return(
      <tr>
				<th>
					{name}
				</th>
        <td>{this.props.product.price}</td>
      </tr>
		);
	}
});

module.exports = ProductRow;
