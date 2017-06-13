import React from 'react'

// export const TodoForm = (props) =>{
//   <form>
//     <input type="text"
//       value={props.currentTodo}
//       onChange={props.handleInputChange}>
//     </input>
//   </form>
// }

export default function TodoForm(props){
  return (
    <form onSubmit={props.onFormSubmit}>
      <input type="text"
        value={props.currentTodo}
        onChange={props.handleInputChange}>
      </input>
    </form>
  );
}

TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired
}
