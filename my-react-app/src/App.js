import { useState } from "react";
import { ItemList } from "./ItemList";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const items = ["Toothbrush", "Laptop", "Mobile", "Book"];
  const itemTemplate = (item, index, onClick) => (
    <>
      <div>
        #{index} - <strong>{item}</strong>{" "}
      </div>
      <div style={{ textAlign: "right" }}>
        <button onClick={onClick}>Select</button>
      </div>
    </>
  );

  return (
    <div>
      <h1>Personal items (React)</h1>
      <ItemList
        items={items}
        itemTemplate={itemTemplate}
        onSelect={setSelectedIndex}
      ></ItemList>
      <span>Selected index: {selectedIndex}</span>
    </div>
  );
}

export default App;
