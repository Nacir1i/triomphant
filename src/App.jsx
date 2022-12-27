import Navbar from "./components/Navba.jsx";

function App() {
  return (
    <div className="relative w-full h-full bg-primary">
      <div
        id="canvas"
        className="z-0 absolute top-0 left-0 w-full h-full"
      ></div>
      <Navbar />
      <div className="lg:h-full w-full h-3/4 bg-background"></div>
    </div>
  );
}

export default App;
