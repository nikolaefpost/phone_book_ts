import React from 'react';
import Home, {CardVariant} from "./pages/Home";
import Contacts from "./pages/Contacts";
import AppRouter from './components/AppRouter';
import NavBar from "./components/NavBar";
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    // <div className="App">
    // {/* <Home*/}
    // {/*     width='200px'*/}
    // {/*     height='100px'*/}
    // {/*     variant={CardVariant.primary}*/}
    // {/*     onClick={(a)=>console.log(a)}*/}
    // {/* >*/}
    // {/*<button>button</button>*/}
    // {/* </Home>*/}
    //     <Contacts/>
    // </div>
      <BrowserRouter>
          <div>
              <NavBar/>
              <AppRouter/>
          </div>

      </BrowserRouter>
  );
}

export default App;
// npm i @types/react-redux redux react-redux redux-thunk axios
