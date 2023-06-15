import SignUpForm from "../../components/SignupForm/SignupForm";

export default function Signup({setUser}) {
        return (
          <main>
            <h2>Sign Up!</h2>
            <SignUpForm setUser={setUser}/>
          </main>
        );
      }
