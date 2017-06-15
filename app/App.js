import React from 'react'
import TodoStore from './todoStore'
import TodoList from './todoList'



export default class App extends React.Component {
  render() {
    return (
		<TodoList store={TodoStore} />
	)
  }
}