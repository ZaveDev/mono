import "./App.css";
import { Player, MonoDeck } from "./components";
function App() {
  const Bob = new Player("bob", "start");
  MonoDeck.shuffle();
  const draw = () => {
    MonoDeck.draw(Bob);
  };
  return (
    <div className="App">
      <button onClick={draw}>draw</button>
    </div>
  );
}

export default App;
