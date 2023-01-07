import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/pages/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
function App() {
  return (
    <BrowserRouter>

    <NavBar />
    
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/item" element={<ItemDetailContainer />}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
