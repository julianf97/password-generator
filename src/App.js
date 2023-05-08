import './App.css';
import { Generator } from './components/Generator/Generator';
import { ValueProvider } from './Context/ValueContext';
import { GenerationProvider } from './Context/GenerationContext';
import React from 'react';

function App() {
  return (
    <div>
      <GenerationProvider>
        <ValueProvider>
          <Generator/>
        </ValueProvider>
      </GenerationProvider>
    </div>
  );
}

export default App;
