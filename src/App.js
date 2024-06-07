import logo from './logo.svg';
import './App.css';
import AddBooks from './Component/AddBooks';
import SearchBook from './Component/SearchBook';
import DeleteBook from './Component/DeleteBook';
import ViewBook from './Component/ViewBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<AddBooks/>}/>
      <Route path='/SearchBook' element={<SearchBook/>}/>
      <Route path='/DeleteBook' element={<DeleteBook/>}/>
      <Route path='/ViewBook' element={<ViewBook/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
