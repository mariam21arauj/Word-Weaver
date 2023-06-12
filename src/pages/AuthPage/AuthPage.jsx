// AuthPage.jsx

import SignUpForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({setUser}) {
  return (
    <main>
      <h2>Sign Up</h2>
      <SignUpForm setUser={setUser}/>
      <h2>Login</h2>
      <LoginForm setUser={setUser}/>
    </main>
  );
}