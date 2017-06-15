import React from "react"
import { observer } from "mobx-react"
import { Button } from 'react-bootstrap'


@observer
export default class TodoList extends React.Component {
  componentDidMount() {
    this.props.store.fetch();
  }


  render() {
    const { todos, isLoading } = this.props.store
    var todoLis = <li></li>
    const buttonsInstance = (      
  <Button>Click me! <i className='fa fa-user'></i></Button>
    )

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
      {buttonsInstance}
    </div>
  }
}