import { checkToken } from "../../utilities/users-service";
import './MainPage.css'
export default function MainPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <div id="main-container">
      <div id="mainMessage-container">
        <h1>Welcome to Word Weaver</h1>
        <h2>The app that helps you create meaningful, beautiful, and powerful writing</h2>
        <p>Check the Dictionary section to find words and learn about their definitions, examples, and parts of speech. Or toggle right there to find out about synonyms as well!</p>
        <p>This app also features a Favorite Words section where you can add the new words your learn and love, and use them as word journal to refer to in your next writing project! </p>
      </div>
      <div>
        <img className="mainpagepic" src="https://i.postimg.cc/Qxy7bZ5t/Mainpage-Word-Weaver.png" alt="" />
      </div>
    </div>
  );
}