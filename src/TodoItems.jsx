import React, { Component } from "react";
import FlipMove from "react-flip-move";
 
class TodoItems extends Component {
  delete = (key) => {
      this.props.delete(key)
  }  
  createTasks = (item) => (
    <li onClick={() => this.delete(item.key)}
      key={item.key}>{item.text}
    </li>)
 
  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};
 
export default TodoItems;