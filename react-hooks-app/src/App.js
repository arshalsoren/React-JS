/*  HOOKS  */
import React from 'react'
import './App.css';
import Counter from './components/Counter';
import CustomCountOne from './components/CustomCountOne';
import CustomCountTwo from './components/CustomCountTwo';
import FocusInput from './components/FocusInput';
import Form from './components/Form';
import MemoCounter from './components/MemoCounter';
import RefTimer from './components/RefTimer';

function App() {
  return (
      <div className="App">
        {/* <FocusInput /> */}
        {/* <RefTimer /> */}
        {/* <CustomCountOne /> */}
        {/* <CustomCountTwo /> */}
        {/* <Counter /> */}
        <Form />
      </div >
  );
}

export default App