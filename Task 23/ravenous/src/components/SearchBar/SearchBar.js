import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match',
		};

		this.handleTermChange = this.handleTermChange.bind(this);

		this.handleLocationChange = this.handleLocationChange.bind(this);

		this.handleSearch = this.handleSearch.bind(this);

		this.sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count',
		};
	}

	getSortByClass(sortByOption) {
		return this.state.sortBy === sortByOption ? 'active' : '';
	}

	handleSortByChange(sortByOption) {
		this.setState({ sortBy: sortByOption });
	}

	renderSortByOptions() {
		const sortByOptionsList = [];
		for (let option in this.sortByOptions) {
			const optionKey = option;
			const optionValue = this.sortByOptions[optionKey];

			const listItem = (
				<li
					key={optionValue}
					className={this.getSortByClass(optionValue)}
					onClick={this.handleSortByChange.bind(this, optionValue)}>
					{optionKey}
				</li>
			);

			sortByOptionsList.push(listItem);
		}
		return sortByOptionsList;
	}

	handleTermChange(e) {
		const input = e.target.value;
		this.setState({ term: input });
	}

	handleLocationChange(e) {
		const input = e.target.value;
		this.setState({ location: input });
	}

	handleSearch(e) {
		this.props.searchYelp(
			this.state.term,
			this.state.location,
			this.state.sortBy
		);

		e.preventDefault();
	}

	render() {
		return (
			<div className='SearchBar'>
				<div className='SearchBar-sort-options'>
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className='SearchBar-fields'>
					<input
						onClick={this.handleTermChange}
						placeholder='Search Businesses'
					/>

					<input
						onClick={this.handleLocationChange}
						placeholder='Where?'
					/>
				</div>
				<div className='SearchBar-submit'>
					<a onClick={this.handleSearch}>Let's Go</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;
