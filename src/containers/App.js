import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchValue: "",
			style1 : {height: '23%'},
			style2 : {marginBottom: '18px',fontSize: '40px'},
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(user => this.setState({robots: user}));		
		document.addEventListener('scroll', this.trackScrolling);
	}

 	componentWillUnmount() {
	  document.removeEventListener('scroll', this.trackScrolling);
	}

	trackScrolling = () => {
		let style3 = {height:'18%', transition: 'height 0.4s linear'};
		let style4 = {fontSize: '30px'};
		if(window.pageYOffset<=120) {
			style3 = { height: "23%", transition: 'height 0.4s linear'};
			style4 = { fontSize: '40px',marginBottom: '18px'};
		}
		this.setState({style1: style3});
		this.setState({style2: style4});

	}

	inputValue = (event) => {
		this.setState({searchValue: event.target.value});
	}


	render() {
		const robotFilter1 = this.state.robots.filter(item => { 
			return item.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
		});

		if(this.state.robots.length===0) {
			return <h1 className="tc ma50">Loading...</h1>
		}
		else {
			return (
				<div className="tc">
					<div style={this.state.style1} className="pa2 bw2 positionHeader ba">
						<h1 className="tc light-blue f1 ma2" style={this.state.style2} >RoboFriends</h1>
						<SearchBox inputEnter={this.inputValue}/>
					</div>
					<div className="positionRobots">
						<ErrorBoundary>
							<CardList robots={robotFilter1}/>
						</ErrorBoundary>
					</div>
				</div>
			);		
		}
		
	}
}

export default App;