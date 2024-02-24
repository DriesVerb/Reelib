import { Btn } from "./elements";

import "./App.css/";

function App() {
  const fire = () => console.log("test");
  return (
    <main className="main">
      <Btn.Icon icon="IconButton" />
      <Btn.Basic label="Basic Button" onClick={() => fire()} />
    </main>
  );
}

export default App;
