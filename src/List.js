import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Cards from './Cards';
import AddCard from './AddCard';

function List({ list }) {
	return (
		<div className="list">
			<div>
				<Title title={list.title} />
			</div>
			<div className="cards">
				<Cards cards={list.cards} />
			</div>
			<div>
				<AddCard />
			</div>
		</div>
	);
}

List.propTypes = {
	list: PropTypes.object.isRequired
};

export default List;
