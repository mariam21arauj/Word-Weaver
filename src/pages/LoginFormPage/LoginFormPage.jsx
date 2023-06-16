import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login({setUser}) {
        return (
          <main>
            <h2>Welcome back to the Word Weaver</h2>
            <LoginForm setUser={setUser}/>
          </main>
        );
      }
