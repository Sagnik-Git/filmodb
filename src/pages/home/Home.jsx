import React from 'react'
import "./style.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import PopularIN from './popularIN/PopularIN';
import Upcoming from './upcoming/Upcoming';

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Upcoming />
      <Trending />
      <PopularIN />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home