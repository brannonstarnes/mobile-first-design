import React from 'react';
import { AppWrap } from './appStyles';
import Header from './components/header/header';
import Content from './components/content/content';

function App() {
  return (
    <AppWrap>
      <Header />
      <Content/>
    </AppWrap>
  );
}

export default App;
