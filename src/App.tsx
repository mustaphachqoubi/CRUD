import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Navbar, Leftbar } from "./components";

function App() {
	return (
    <div className="flex justify-center ">
      <div className="fixed top-0 bottom-0 left-0 right-[30%] sm:right-[50%] md:relative md:w-80">
      <div className="fixed top-0 bottom-0 w-60">
      <Leftbar />
      </div>
      </div>
      <div className="w-full bg-green-500">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
