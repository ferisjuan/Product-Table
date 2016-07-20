var React = require('react');

var ProductRow = React.createClass({
	render(){
    var styles = this.props.info.stocked ? {color: 'black'} : {color: 'red'};

		return(
      <tr className="">
        <td style={styles}>{this.props.info.name}</td>
        <td>{this.props.info.price}</td>
      </tr>
		);
	}
});

module.exports = ProductRow;
