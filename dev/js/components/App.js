import React from 'react';
import CarList from '../containers/car-list';
import RaceOptions from '../containers/race-options';
import RaceResult from '../containers/race-result';
import 'bootstrap/dist/js/bootstrap';

require('bootstrap/dist/css/bootstrap.css');
require('../../scss/style.scss');

const App = () => (
	<div>
		<h2 className="game text-center"> Mad Trucker </h2>
		<br />
		<RaceResult />
		<br />
		<CarList />
		<br />
		<RaceOptions />
	</div>
);


export default App;
