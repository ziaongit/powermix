import React from 'react';
import Header from './components/Header';
import ProfileView from './components/ProfileView';
import Portfolio from './components/Portfolio';
import Description from './components/Description';
import FlashTeam from './components/FlashTeam';
import SimilarSubscriptions from './components/SimilarSubscriptions';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <ProfileView />
      <Portfolio />
      <Description />
      <FlashTeam />
      <SimilarSubscriptions />
      <Footer />
    </React.Fragment>
  );
}

export default App;