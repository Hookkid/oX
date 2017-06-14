import React from "react"
import { observer } from "mobx-react"


@observer
export default class TodoList extends React.Component {
  componentDidMount() {
    this.props.store.fetch();
  }


  render() {
    const { todos, isLoading } = this.props.store
    var todoLis = <li></li>

    if(isLoading){
      todoLis = <li>Loading</li>
    }else{
      todoLis = todos.slice().map(todo => (
        <li key={todo.name}>
          <span>{todo.name} - {todo.distance}</span>
        </li>
      ))
    }

    return <div>
      <ul>{ todoLis }</ul>
    </div>
  }
}