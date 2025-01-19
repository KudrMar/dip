import React from 'react';

import HeaderSearch from '../HomePage/HeaderSearch';
import Sidebar from '../SearchTrainPage/Sidebar';
import ChoseSeatsMain from '../ChoseSeatsPage/ChoseSeatsMain';
import ProgressNav from '../MainPage/ProgressNav';


function ChoseSeats() {
    return (
        <div className="main-SearchTrain">
            <HeaderSearch className="nofirstpage-header" />
            <ProgressNav className="2" />
            <section className="main-ChoseSeats-centerSection">
                <div className="main-ChoseSeats-centerSection-in">
                    <Sidebar />
                    <ChoseSeatsMain />
                </div>
            </section>
        </div>
    );
};

export default ChoseSeats;