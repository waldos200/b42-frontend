import React from 'react';
import Navigation from './components/Navigation/index';
import HolaMundo from './components/HolaMundo/index';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Navigation />
      <div className="container">
        <h1>Hola Cinta Negra</h1>
        <HolaMundo />
      </div>
    </AuthContextProvider>
  );
}

export default App;
