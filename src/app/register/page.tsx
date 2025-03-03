import ContinueButton from "../components/continuebtn/continuebtn";
import "../scss/main.scss"
import "./register.scss"
import Navbar from "../components/Navbar/Navbar";
export default function Register() {
  return (
    <>
      <Navbar />
      <main id="Register-page">
        <h1 id="Login-head">Create New Arctic Id</h1>
        <input type="email" className="register-inputs top-input" placeholder="your email:" />

        <p id="tag-alert">atleast one is required*</p>
        <input type="text" className="register-inputs mid-input" placeholder="Java Gamertag:" />
        <input type="text" className="register-inputs bottom-input" placeholder="Bedrock Gamertag:" />
        <ContinueButton />
      </main>
    </>
  );
}
