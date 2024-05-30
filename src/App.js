import Dropdown from "./Dropdown";

function App() {
  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="App">
      <div>
        <h1 className="text-3xl text-center my- 4">Dropdown</h1>
        <Dropdown items={items} />
      </div>
    </div>
  );
}

export default App;
