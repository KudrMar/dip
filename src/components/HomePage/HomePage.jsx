import React from 'react';

import HeaderSearch from './HeaderSearch';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import Feedbacks from './Feedbacks';


function Main() {
	return (

		<div className = "main">
			<HeaderSearch className="firstpage-header"/>
			<AboutUs/>
			<HowItWorks/>
			<Feedbacks/>
		</div>
	);
};

export default Main;