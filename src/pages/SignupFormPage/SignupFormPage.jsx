import SignUpForm from "../../components/SignupForm/SignupForm";
import './SignupFormPage.css'
export default function Signup({setUser}) {
        return (
          <main>
            <h1 id="signup">Register to the Word Weaver</h1>
            <SignUpForm setUser={setUser}/>
          </main>
        );
      }
