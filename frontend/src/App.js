import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  let login = false;
  return login == true ? (
    <div className="h-screen w-screen">
      <Login />
    </div>) : (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="flex h-full w-full">
        <Sidebar />
        <Home />
      </div>

    </div>
  );
}

export default App;
