import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import MainPage from '../MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import DictionaryPage from '../DictionaryPage/DictionaryPage';
import FavoriteWordsPage from '../FavoriteWordsPage/FavoriteWordsPage';
import ThesaurusPage from '../ThesaurusPage/ThesaurusPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {
        user ? 
        <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
           <Route path='/' element={<MainPage/>}/>
           <Route path='/dictionary' element={<DictionaryPage/>}/>
           <Route path='/favorites' element={<FavoriteWordsPage/>}/>
           <Route path='/thesaurus' element={<ThesaurusPage/>}/>
        </Routes>
        </>
       
        :
        <AuthPage/>
      }

    </main>
  );
}


