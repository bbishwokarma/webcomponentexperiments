import { useState } from "react";

const defaultTemplate = (item, index, onClick) => (
  <button onClick={onClick}>
    {index} - {item}
  </button>
);

export const ItemList = ({ items, itemTemplate, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const template = itemTemplate || defaultTemplate;

  const onClick = (e, i) => {
    e.preventDefault();
    setSelectedIndex(i);
    onSelect && onSelect(i);
  };

  return (
    <div style={{ padding: "10px", border: "1px solid gray", width: "300px" }}>
      {items?.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "10px",
            border: `2px solid ${
              selectedIndex === index ? "blue" : "transparent"
            }`,
          }}
        >
          {template(item, index, (e) => onClick(e, index))}
        </div>
      ))}
    </div>
  );
};
