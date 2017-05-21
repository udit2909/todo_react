import React from 'react';

export default function TodoItem(props){
  return (
    <li>
      <input type="checkbox" defaultChecked={props.isCompleted}/> {props.name}
    </li>
  );
}
