import ContinueButton from "../components/continuebtn/continuebtn";
import "./login.scss";
import "../scss/main.scss"
import Navbar from "../components/Navbar/Navbar";
export default function Login() {
  return (
    <>
      <Navbar />
      <main id="login-page">
        <h1 id="Login-head">Login With email and pass</h1>
        <input type="email" className="login-inputs top-input" placeholder="email:" />
        <input type="password" id="password-input" className="login-inputs bottom-input" placeholder="pass:" />
        <ContinueButton />
      </main>
    </>
  );
}
