// AuthPage.jsx

import { Link } from "react-router-dom";

export default function AuthPage({setUser}) {
  return (
    <main>
      <h2>Welcome</h2>
      <Link to='/signup'>Sign Up</Link>
      &nbsp; | &nbsp;
      <Link to='/login'>Login</Link>
    </main>
  );
}