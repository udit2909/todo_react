import {addTodo, findById, toggleTodo, updateTodo} from './todoHelpers'

test('addTodo should add passed toDo to the list', () => {
  const startTodos = [
    {id: 1, name: 'a', isCompleted: false},
    {id: 2, name: 'b', isCompleted: false}
  ];
  const newTodo = {id: 3, name: 'c', isCompleted: false};
  const expected = [
    {id: 1, name: 'a', isCompleted: false},
    {id: 2, name: 'b', isCompleted: false},
    {id: 3, name: 'c', isCompleted: false}
  ]

  const result = addTodo(startTodos, newTodo);

  expect(result).toEqual(expected);
})

test('findById should return the righ todo from array', () => {
  const startTodos = [
    {id: 1, name: 'a', isCompleted: false},
    {id: 2, name: 'b', isCompleted: false}
  ];
  const expected = {id: 2, name: 'b', isCompleted: false};
  const result = findById(2, startTodos);
  expect(result).toEqual(expected);
})

test('toggleTodo should toggle isCompleted true and false', () => {
  const startTodo = {id: 1, name: 'a', isCompleted: false};
  const expected = {id: 1, name: 'a', isCompleted: true};
  const result = toggleTodo(startTodo);
  expect(result).toEqual(expected);
})

test('updateTodo should update the todo with given id in array', () => {
  const startTodos = [
    {id: 1, name: 'a', isCompleted: false},
    {id: 2, name: 'b', isCompleted: false}
  ];
  const newTodo = {id: 2, name: 'b', isCompleted: true};
  const expected = [
    {id: 1, name: 'a', isCompleted: false},
    {id: 2, name: 'b', isCompleted: true}
  ]
  const result = updateTodo(startTodos, newTodo);

  expect(result).toEqual(expected);
})
