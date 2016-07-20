var React = require('react');

var ProductRow = React.createClass({
	render(){
		var name;

		if(this.props.info.stocked){
			name = <td>{this.props.info.name}</td>
		}else {
			name = <td style={{color: 'red'}}>{this.props.info.name}</td>
		}

		return(
      <tr>
				<th>
					{name}
				</th>
        <td>{this.props.info.price}</td>
      </tr>
		);
	}
});

module.exports = ProductRow;
