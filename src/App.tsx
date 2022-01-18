import React from 'react';
import AppRouter from './components/AppRouter';
import NavBar from "./components/NavBar";
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
          <div className='h-100 bg-light pt-5 text-center'  >
              <NavBar/>
              <AppRouter/>
          </div>

      </BrowserRouter>
  );
}

export default App;
// npm i @types/react-redux redux react-redux redux-thunk axios
