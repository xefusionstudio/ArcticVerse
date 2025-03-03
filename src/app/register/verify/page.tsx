import ContinueButton from "../../components/continuebtn/continuebtn";
import "../../scss/main.scss"
import Navbar from "../../components/Navbar/Navbar";
import './verify.scss'
export default function Verify() {
  return (
    <>
      <Navbar />
      <main id="verify-page">
        <h1 id="createpass-head">Confirm your email</h1>
        <p id="verify-msg">I have sent you the code to your email</p>
        <input type="text" id="code-input" className="code-input bottom-input" placeholder="ABCD1234" />
        <ContinueButton />
      </main>
    </>
  );
}
