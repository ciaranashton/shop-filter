import * as React from "react"
import { render } from "react-dom"
import Shop from './components/Shop/index';

const App = () => {
  return (
    <div className="App">
      <h1>Shop Application</h1>
      <Shop />
    </div>
  );
}

render(<App />, document.getElementById("app"))
