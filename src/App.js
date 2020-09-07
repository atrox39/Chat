import React from 'react';
import Navbar from './components/navbar';
import Message from './components/message';

function App() {
  return (
    <div className="content">
      <Navbar title="Chat" elements={
        ['Login','Register','Info']
        } />
      <div className="main">
        <Message datetime="2020-09-07 13:50:00">
          Hola, como estas?
        </Message>
      </div>
    </div>
  );
}

export default App;
