import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import ContaraCon from './components/ContaraCon';
import ClientsSection from './components/Clients';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <ContaraCon />
      <ClientsSection />
    </div>
  );
};

export default App;

