import React from 'react';
import ProfileView from './ProfileView';
import Portfolio from './Portfolio';
import Description from './Description';
import FlashTeam from './FlashTeam';
import SimilarSubscriptions from './SimilarSubscriptions';

const Home = () => {
  return (
    <React.Fragment>
      <ProfileView />
      <Portfolio />
      <Description />
      <FlashTeam />
      <SimilarSubscriptions />
    </React.Fragment>
  );
}

export default Home;