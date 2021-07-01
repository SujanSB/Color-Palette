import "./App.css";
import Colors from "./Colors";
// import { Grid, Paper } from "@material-ui/core";
import HaveYourOwn from './HaveYourOwn'

function App() {
  return (
    <div className="App">
      <div className="topbar">
        <h1>Colors TO use</h1>
      </div>
      <Colors />
      <div className="downpart">
        <div className="downheading">
        <h1>Have Your Own Colors To Use</h1>

        </div>
        <div className="downcenter">
<HaveYourOwn/>
        </div>
      </div>
    </div>
  );
}

export default App;
