import Register from "./register";
import axios from "axios";

const App = () => {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true;
  return (
    <div id="root" className="bg-gray-900 text-gray-50 min-h-screen">
      <Register />
    </div>
  );
};

export default App;
