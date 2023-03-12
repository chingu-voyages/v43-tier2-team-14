import { useState } from "react";
import "./App.css";

const signWithGoogleHandler = () => {
  console.log("signin");
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl bg-blue-400 font-bold underline">
        Welcome To The Main Project
      </h1>
      {/* <button onClick={signWithGoogleHandler}>Signin With Google</button> */}
      <h1>Sign in</h1>
      <a class="button google" href="/login/federated/google">
        Sign in with Google
      </a>
    </div>
  );
}

export default App;
