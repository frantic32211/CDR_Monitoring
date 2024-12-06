import React from 'react'
import CurrFileStatus from './CurrFileStatus'
import ErrorLog from './ErrorLog'
import RulesConfig from './RulesConfig'
import Metrics from './Metrics'
import Footer from './Footer'
import Dashboard from "./Dashboard"

const Home = () => {
    let temp = false;
    return temp == true ? (
        <div className='pt-20 pb-10 w-full'>
            <Dashboard />
            <Footer />
        </div>
    ) : (
        <div className='pt-20 pb-10  w-full flex flex-wrap'>
            <CurrFileStatus />
            <ErrorLog />
            <RulesConfig />
            <Metrics />
            <Footer />
        </div>
    )
}

export default Home