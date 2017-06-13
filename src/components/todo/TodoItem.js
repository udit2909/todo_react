import React from 'react';

export default function TodoItem(props){
  return (
    <li>
      <input type="checkbox"
        onChange={() => props.handleToggle(props.id)} 
        defaultChecked={props.isCompleted}/> {props.name}
    </li>
  );
}

TodoItem.propTypes = {
  isCompleted: React.PropTypes.isCompleted,
  name: React.PropTypes.name
}
