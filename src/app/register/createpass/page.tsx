import ContinueButton from "../../components/continuebtn/continuebtn";
import "../../scss/main.scss"
import Navbar from "../../components/Navbar/Navbar";
import './createpass.scss'
export default function CreatePass() {
  return (
    <>
      <Navbar />
      <main id="login-page">
        <h1 id="createpass-head">Create a Strong Pass</h1>
        <input type="password" id="password-input" className="createPass-inputs top-input" placeholder="new pass:" />
        <input type="password" id="confirmPass-input" className="createPass-inputs bottom-input" placeholder="confirm pass:" />
        <ContinueButton />
      </main>
    </>
  );
}
