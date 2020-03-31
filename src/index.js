import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './List';

const list = {
	title: 'Phone Features',
	cards: [
		{
			title: 'subwoofer',
			id: 1
		},
		{
			title: 'non-porous washable',
			id: 2
		},
		{
			title: 'wings',
			id: 3
		},
		{
			title: 'Beveled Bezel',
			id: 4
		},
		{
			title: 'Bezeled Bevel',
			id: 5
		},
		{
			title: 'Seadless',
			id: 6
		}
	]
};

ReactDOM.render(<List list={list} />, document.querySelector('#root'));
