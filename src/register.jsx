import axios from "axios";
import { useState } from "react";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    // await axios.post("/register", { username, password });
   
  }

  return (
    <div className="h-screen flex items-center">
      <form className="w-96 mx-auto" onSubmit={register}>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 border text-gray-900"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 border text-gray-900"
        />
        <button className="bg-gray-500 block w-full rounded-sm border py-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
