import NavBar from "./Components/NavBar";
import Cardlist from "./Components/Cardlist"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from "./Components/Redux/store"
import { Provider } from "react-redux";
function App() {
  return (

    
      <div >
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/:page?" element={<Cardlist />} />
          <Route path="/" element={<Cardlist />} />
        </Routes>
      </Provider>
      </div>
   

  );
}

export default App;
