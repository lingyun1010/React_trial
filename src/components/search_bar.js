import React,  {Component} from 'react';

class SearchBar extends Component {

	constructor(props){

		super(props);

<<<<<<< HEAD
		this.state = {term: ''};
=======
		this.state = {term: 'search'};
>>>>>>> c6dba14aa6ac18b9c04ee61520d14f26ab905909
	}

	render(){

		return (
<<<<<<< HEAD
			<div className="search-bar">
				<input 
				value = {this.state.term}
				onChange={event => this.onInputChange(event.target.value)}/>
			</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);

	}
=======
			<div>
				<input 
				value = {this.state.term}
				onChange={event => this.setState({term: event.target.value})}/>
			</div>
		);
	}
>>>>>>> c6dba14aa6ac18b9c04ee61520d14f26ab905909
}

export default SearchBar;