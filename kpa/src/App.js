import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CigmaFeed } from "./Components/Cigmafeed.js";
//import FarAway from "./FarAway.js"

function App() {
  return (
    <>
      <div>
        <CigmaFeed />
      </div>
      {/* <div className='container m-5'>
      <FarAway />
    </div> */}
      <br />
      <br />
    </>
  );
}

export default App;
