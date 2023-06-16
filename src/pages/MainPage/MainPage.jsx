import { checkToken } from "../../utilities/users-service";
import './MainPage.css'
export default function MainPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <div>
      <h1>Main Page</h1>
      <img className="mainpagepic" src="https://i.postimg.cc/Qxy7bZ5t/Mainpage-Word-Weaver.png" alt="" />
    </div>
  );
}