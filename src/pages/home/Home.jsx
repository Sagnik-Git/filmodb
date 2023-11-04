import React from 'react'
import "./style.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import PopularIN from './popularIN/PopularIN';

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <TopRated />
      <Popular />
      <PopularIN />
    </div>
  )
}

export default Home