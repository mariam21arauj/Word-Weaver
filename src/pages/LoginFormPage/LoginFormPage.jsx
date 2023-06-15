import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login({setUser}) {
        return (
          <main>
            <h2>Login</h2>
            <LoginForm setUser={setUser}/>
          </main>
        );
      }
