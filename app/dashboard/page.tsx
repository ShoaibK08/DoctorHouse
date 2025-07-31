import React from 'react'
import Map from './components/Map';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const DashboardPage = () => {
    const Latitude = 22.732976148439505;
    const Longitude = 75.92056606973127;
    return (
        <>
            <Navbar />
            <Map latitude={Latitude} longitude={Longitude} />
            <Footer />
        </>
    )
}

export default DashboardPage