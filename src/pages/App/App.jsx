import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import MainPage from '../MainPage/MainPage';

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      {
        user ? 
        <MainPage/>
        :
        <AuthPage/>
      }

    </main>
  );
}


