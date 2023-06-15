// AuthPage.jsx
import './AuthPage.css'
import { Link } from "react-router-dom";

export default function AuthPage() {
  return (
    <main>
      <div className="d-flex flex-column justify-content-center w-100 h-100">
	      <div id='container' className="d-flex flex-column justify-content-center align-items-center">
		      <h1 className="fw-light text-white m-0">Welcome To Word Weaver</h1>
		      <div className="btn-group my-5">
            <Link className="btn btn-outline-light" to='/login'>Login</Link>
            &nbsp; | &nbsp;
            <Link className="btn btn-outline-light" to='/signup'>Sign Up</Link>
		      </div>
		      <h5 className="fw-light text-white m-0">— By Mariam Araujo —</h5>
	      </div>
      </div>
    </main>
  );
}