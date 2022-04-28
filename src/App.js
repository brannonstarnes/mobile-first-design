import React from 'react';
import { AppWrap } from './appStyles';
import Header from './components/header/header';
import Content from './components/content/content';
import SocialBar from './components/social/socialBar';

function App() {
  return (
    <AppWrap>
      <Header />
      <SocialBar/>
      <Content/>
    </AppWrap>
  );
}

export default App;
