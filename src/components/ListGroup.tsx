import React, { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h2>{heading}</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
          onClick={() => {
            setSelectedIndex(index);
            onSelectItem(items[index]);
          }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="list-group">***</div>
      <div className="list-group">
        <p className="list-group-item active">
          {selectedIndex !== -1
            ? `Selected Item: ${items[selectedIndex]}`
            : "No item selected"}
        </p>
      </div>
    </>
  );
};

export default ListGroup;
