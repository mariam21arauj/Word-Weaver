import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import MainPage from '../MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import DictionaryPage from '../DictionaryPage/DictionaryPage';
import FavoriteWordsPage from '../FavoriteWordsPage/FavoriteWordsPage'
import NavBar from '../../components/NavBar/NavBar';
import Login from '../LoginFormPage/LoginFormPage';
import SignUpForm from '../../components/SignupForm/SignupForm';
import Signup from '../SignupFormPage/SignupFormPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div>
      <main className="App">
      {
        user ? (
          <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
           <Route path='/' element={<MainPage user={user} setUser={setUser}/>}/>
           <Route path='/dictionary' element={<DictionaryPage user={user} setUser={setUser}/>}/>
           <Route path='/favorites' element={<FavoriteWordsPage user={user} setUser={setUser}/>}/>
        </Routes>
        </>
        ):(
          <>
          <AuthPage setUser={setUser}/>
          <Routes>
            <Route path='/login' element={<Login user={user} setUser={setUser}/>}></Route>
            <Route path='/signup' element={<Signup user={user} setUser={setUser}/>}></Route> 
          </Routes>
          </>
      )}
    </main>
    </div>
    
  );
}


