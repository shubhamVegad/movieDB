import React from 'react';
import HeroBanner from './heroBanner/heroBanner';
import Trending from './trending/trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import "./style.scss";

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/> 
      <Popular />   
      <TopRated/>  
    </div>
  )
}

export default Home
