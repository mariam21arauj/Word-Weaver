import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import MainPage from '../MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState({})
  return (
    <main className="App">
      {
        user ? 
        <Routes>
           <Route path='/' element={<MainPage/>}/>
        </Routes>
        :
        <AuthPage/>
      }

    </main>
  );
}


