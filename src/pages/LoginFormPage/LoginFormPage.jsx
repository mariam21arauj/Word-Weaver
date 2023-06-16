import './LoginFormPage.css'
import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login({setUser}) {
        return (
          <main>
            <h1 id="welcomeBack">Welcome back to the Word Weaver</h1>
            <LoginForm setUser={setUser}/>
          </main>
        );
      }
