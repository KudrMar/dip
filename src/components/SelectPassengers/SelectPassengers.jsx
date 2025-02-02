
import React from 'react';

import HeaderSearch from '../HomePage/HeaderSearch';
import Sidebar from '../SearchTrainPage/Sidebar';
import SelectSeatsMain from '../SelectSeatsPage/SelectSeatsMain';
import ProgressNav from '../MainPage/ProgressNav';


function SelectPassengers() {
    return (
        <div className="main-SearchTrain">
            <HeaderSearch className="nofirstpage-header" />
            <ProgressNav className="2" />
            {/* <section className="main-SelectSeats-centerSection">
                <div className="main-SelectSeats-centerSection-in">
                    <Sidebar />
                    <SelectSeatsMain />
                </div>
            </section> */}
        </div>
    );
};

export default SelectPassengers;