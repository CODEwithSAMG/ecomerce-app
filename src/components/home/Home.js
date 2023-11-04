import { useState } from 'react';
import HomeProductList from './HomeProductList';

import { HeroBanner } from '../index';
import { TopLoader } from '../../UI/TopLoader';

const Home = () => {
    const [progress, setProgress] = useState();

    return (
        <div className='p-10'>
            <TopLoader progress={progress} setProgress={setProgress} />

            <HeroBanner />

            <HomeProductList />
        </div>
    );
};

export default Home;
