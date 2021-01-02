import React from "react";
import FlipMove from 'react-flip-move';

export default function ListItems(props) {
  const items = props.items;
  //console.log(items)

  const ListItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input type="text" 
          id={item.key} 
          value={item.text}
          onChange = {(e) => {
            props.setUpdate(e.target.value, item.key)
          }}
          />
          <span onClick={() => props.deleteItem(item.key)}>X</span>
        </p>
      </div>
    );
  });
  return <div>
  <FlipMove duration={400} easing ="ease-in-out">
      {ListItems}
  </FlipMove>
  </div>;
}
