import * as React from "react"
import { render } from "react-dom"
import Shop from './components/Shop/index';
import { ShopProvider } from './components/Shop/ShopContext'

const App = () => {
  return (
    <div className="App">
      <h1>Shop Application</h1>
      <Shop />
    </div>
  );
}

render(<ShopProvider><App /></ShopProvider>, document.getElementById("app"))
