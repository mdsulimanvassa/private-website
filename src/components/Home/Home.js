import React from 'react';
import HomeDetail from '../HomeDetail/HomeDetail';
import HomeItem from '../HomeItem/HomeItem';

const Home = () => {
    return (
        <div>
            <div className='half-height'>
                <HomeDetail></HomeDetail>
            </div>
            <div className='half-height height'>
                <HomeItem></HomeItem>
            </div>
        </div>
    );
};

export default Home;