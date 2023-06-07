import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import MainPage from '../MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import DefinitionsPage from '../DefinitionsPage/DefinitionsPage';
import ExamplesPage from '../ExamplesPage/ExamplesPage';
import FavoriteWordsPage from '../FavoriteWordsPage/FavoriteWordsPage';
import SynonymousPage from '../SynonymousPage/SynonymousPage';
import AntonymousPage from '../AntonymousPage/AntonymousPage';
export default function App() {
  const [user, setUser] = useState({})
  return (
    <main className="App">
      {
        user ? 
        <Routes>
           <Route path='/' element={<MainPage/>}/>
           <Route path='/definitions' element={<DefinitionsPage/>}/>
           <Route path='/examples' element={<ExamplesPage/>}/>
           <Route path='/favorites' element={<FavoriteWordsPage/>}/>
           <Route path='/synonymous' element={<SynonymousPage/>}/>
           <Route path='/antonymous' element={<AntonymousPage/>}/>
        </Routes>
        :
        <AuthPage/>
      }

    </main>
  );
}


