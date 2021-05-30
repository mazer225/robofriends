import React from 'react';

class SearchBox extends React.Component {
	render() {
		return (
			<div className="tc">
				<input className="bg-light-green b mb2 w-15" type="text" placeholder="Enter Robot Name" onInput={this.props.inputEnter}/>			
			</div>
		);
	}
}

export default SearchBox;